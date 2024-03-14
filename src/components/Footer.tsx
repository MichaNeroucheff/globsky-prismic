import {createClient} from "@/prismicio";
import {PrismicNextLink} from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import LogoGlucone from "@/components/LogoGlucone"

export default async function Footer({ lang }) {

    const client = createClient();
    const navigation = await client.getSingle("navigation",{ lang });

    return <Bounded
        as="footer"
        className="py-2 md:py-4 lg:py-6 bg-gray-50"
    >
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
            <div className="w-28" >
                <Link href="/">
                    <LogoGlucone />
                </Link>
                <p className="text-xs text-gray-900 text-center"><b>DIGITAL AGENCY</b>
                    <br/>Arnaud Fraiteurlaan 15/23, 1050 Elsene
                </p>
            </div>
            <p className="text-sm">©{new Date().getFullYear()} Glucône</p>
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