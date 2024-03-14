import {createClient} from "@/prismicio";
import {PrismicNextLink} from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo"
import {LanguageSwitcher} from "@/components/LanguageSwitcher";

export default async function Header({ lang, locales }) {

    const client = createClient();
    const navigation = await client.getSingle("navigation",{ lang });

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
                <ul className="flex">
                    {navigation.data.navigation.map(({link, label})=>(
                        <li key={label}>
                            <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </Bounded>

}