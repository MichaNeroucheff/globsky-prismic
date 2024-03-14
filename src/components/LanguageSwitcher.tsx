import { PrismicNextLink } from '@prismicio/next';

interface LanguageSwitcherProps {
    locales: {
        lang: string;
        lang_name: string;
        url: string;
    }[];
}

const localeLabels = {
    'en-us': 'EN',
    'fr-fr': 'FR',
};

export const LanguageSwitcher = ({ locales }: LanguageSwitcherProps) => (
    <div className="flex justify-end flex-wrap gap-3 bg-cyan-500 py-1 md:py-1 lg:py-2 px-1 md:px-1 lg:px-2">
        <span aria-hidden>🌐</span>
        <ul className="flex flex-wrap gap-3">
            {locales.map((locale) => (
                <li key={locale.lang} className="font-body text-white first:font-semibold first:text-cyan-900">
                    <PrismicNextLink
                        href={locale.url}
                        locale={locale.lang}
                        aria-label={`Change language to ${locale.lang_name}`}
                    >
                        {localeLabels[locale.lang as keyof typeof localeLabels] ||
                            locale.lang}
                    </PrismicNextLink>
                </li>
            ))}
        </ul>
    </div>
);