import {createClient} from "@/prismicio";
import {PrismicNextLink} from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo"
import {LanguageSwitcher} from "@/components/LanguageSwitcher";

export default async function NavigationWithSub({ lang, locales }) {

    const client = createClient();
    const navigation = await client.getByUID("navigationwithsub", "header-navigation",{ lang });
    //const navigation = await client.getSingle("header-navigation",{ lang });

    console.log(navigation);

    return <Bounded
        as="header"
        className="py-4 md:py-6 lg:py-8 bg-gray-50"
    >
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
            <div className="w-60" >
            <Link href="/">
                <Logo />
            </Link>
            </div>
            <nav>
                <ul className="flex gap-4">
                    {/* Renders top-level links. */}
                    {navigation.data.slices.map((slice) => {
                        return (
                            <li key={slice.id}>
                                <PrismicNextLink field={slice.primary.link}>
                                    {slice.primary.title}
                                </PrismicNextLink>

                                {/* Renders child links, if present. */}
                                {slice.items.length > 0 && (
                                    <ul>
                                        {slice.items.map((item) => {
                                            return (
                                                <li key={JSON.stringify(item)}>
                                                    <PrismicNextLink field={item.child_link}>
                                                        {item.child_title}
                                                    </PrismicNextLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </Bounded>

}