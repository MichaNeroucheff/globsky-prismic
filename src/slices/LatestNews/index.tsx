import { Content } from "@prismicio/client";
import {JSXMapSerializer, PrismicRichText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import {createClient} from "@/prismicio";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import Button from "@/components/Button";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading
          as="h2"
          size="md"
          className="text-center mb-12"
      >
        {children}
      </Heading>
  ),
  heading3: ({children}) => (
      <Heading
          as="h3"
          size="sm"
          className="md:mb-2 mb-2 mt-4"
      >
        {children}
      </Heading>
  ),
  paragraph: ({children}) => (
      <p
          className="text-lg md:test-2xl font-normal font-body text-slate-600 mb-8"
      >
        {children}
      </p>
  ),
}

/**
 * Props for `LatestNews`.
 */
export type LatestNewsProps = SliceComponentProps<Content.LatestNewsSlice>;

/**
 * Component for "LatestNews" Slices.
 */
const LatestNews =  async ({ slice }: LatestNewsProps): Promise<JSX.Element> => {

  const client = createClient();
  const lang = 'fr-fr';
    const news = await client.getAllByType("news", {
    limit: 3,
    lang: lang
  });

    console.log(news);

  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <PrismicRichText
            field={slice.primary.heading}
            components={components}
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {news.map((item,index) => (
              <div key={index} className="border bg-white shadow-lg rounded-lg grid content-start">
                <div>
                  <PrismicNextImage
                      width={400}
                      height={150}
                      field={item.data.featured_image}
                      className="rounded-t-lg mr-4"
                      imgixParams={{ar: "3:2",fit: "crop"}}
                  />
                </div>
                <div className="px-6 md:px-6 py-6 md:py16">
                  <PrismicRichText
                      field={item.data.title}
                      components={components}
                  />
                  <PrismicRichText
                      field={item.data.topic}
                      components={components}
                  />
                    <Button
                        field={item}
                    >
                        {slice.primary.button_text}
                    </Button>
                </div>
              </div>
          ))}
        </div>
      </Bounded>
  );
};

export default LatestNews;
