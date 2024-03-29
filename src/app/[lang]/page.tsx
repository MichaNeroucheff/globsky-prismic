import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { getLocales } from '@/utils/getLocales';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationWithSub from "@/components/NavigationWithSub";

export async function generateMetadata({ params: { lang } }): Promise<Metadata> {
    const client = createClient();
    const home = await client.getByUID('page', 'home', { lang });

    return {
        title: home.data.meta_title,
        description: home.data.meta_description,
        openGraph: {
            title: home.data.meta_title || undefined,
            images: [
                {
                    url: home.data.meta_image.url || '',
                },
            ],
        },
    };
}

export default async function Index({ params: { lang } }) {
    const client = createClient();
    const home = await client.getByUID('page', 'home', { lang });

    const locales = await getLocales(home, client);

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <Header lang={ lang } locales={locales} />
            <NavigationWithSub lang={ lang } locales={locales} />
            <SliceZone slices={home.data.slices} components={components} context={{ lang: lang }}/>
            <Footer lang={ lang } />
        </>
    );
}