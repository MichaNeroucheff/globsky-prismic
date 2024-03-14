import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { getLocales } from '@/utils/getLocales';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Params = { uid: string; lang: string };

export async function generateMetadata({
   params,
}: {
    params: Params;
}): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID('news', params.uid, { lang: params.lang })
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            title: page.data.meta_title || undefined,
            images: [
                {
                    url: page.data.meta_image.url || '',
                },
            ],
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client.getByUID('news', params.uid, {
            lang: params.lang,
        })
        .catch(() => notFound());

    const locales = await getLocales(page, client);

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <Header lang={params.lang} locales={locales} />
            <SliceZone slices={page.data.slices} components={components} />
            <Footer lang={params.lang} />
        </>
    );
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType('news', {
        predicates: [prismic.filter.not('my.page.uid', 'home')],
        lang: '*',
    });

    return pages.map((page) => ({ uid: page.uid, lang: page.lang }));
}