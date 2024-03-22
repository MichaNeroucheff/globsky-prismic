import { Content } from "@prismicio/client";
import {JSXMapSerializer, PrismicRichText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import {createClient} from "@/prismicio";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import Button from "@/components/Button";
import clsx from "clsx/clsx";
import { SliceContext } from "@/types/SliceContext";

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
 * Props for `ListNews`.
 */
export type ListNewsProps = SliceComponentProps<Content.ListNewsSlice, SliceContext>;

/**
 * Component for "ListNews" Slices.
 */
const ListNews =  async ({ slice, context }: ListNewsProps): Promise<JSX.Element> => {

  const client = createClient();
  const page = 1;
  const news = await client.getByType("news", {
      orderings: {
          field: 'document.first_publication_date',
          direction: 'desc',
      },
      lang: context.lang,
      pageSize: 6,
      page: page,
  });

  console.log(news);

  return (
      <>
          {slice.variation === "default" &&(
              <Bounded
                  data-slice-type={slice.slice_type}
                  data-slice-variation={slice.variation}
              >
                <PrismicRichText
                    field={slice.primary.heading}
                    components={components}
                />
                <div className="grid grid-cols-1 gap-8">
                  {news.results.map((item,index) => (
                      <div key={index} className="border bg-white shadow-lg rounded-lg grid content-start">

                          <div className="grid md:grid-cols-2 place-items-start xl:gap-8 gap-4">
                              <PrismicNextImage
                                  width={800}
                                  height={300}
                                  field={item.data.featured_image}
                                  className="lg:rounded-l-lg md:rounded-tr-none md:rounded-bl-none rounded-t-lg"
                                  imgixParams={{ar: "3:2",fit: "crop"}}
                              />
                              <div className="grid m-4">
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

                      </div>
                  ))}
                </div>
                  <div className="flex gap-4 items-center justify-center sm:flex-row flex-col py-4">
                      <Button
                          field=""
                          className="bg-orange-500 hover:bg-orange-700"
                      >
                          Previous
                      </Button>
                      <Button
                          field=""
                          className="bg-orange-700 hover:bg-orange-900"
                      >
                          Next
                      </Button>
                  </div>
              </Bounded>
          )}
          {slice.variation === "2Columns" &&(
              <Bounded
                  data-slice-type={slice.slice_type}
                  data-slice-variation={slice.variation}
              >
                  <PrismicRichText
                      field={slice.primary.heading}
                      components={components}
                  />
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                      {news.results.map((item,index) => (
                          <div key={index} className="border bg-white shadow-lg rounded-lg grid content-start">
                              <div>
                                  <PrismicNextImage
                                      width={800}
                                      height={300}
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
                  <div className="flex gap-4 items-center justify-center sm:flex-row flex-col py-4">
                      <Button
                          field=""
                          className="bg-orange-500 hover:bg-orange-700"
                      >
                          Previous
                      </Button>
                      <Button
                          field=""
                          className="bg-orange-700 hover:bg-orange-900"
                      >
                          Next
                      </Button>
                  </div>
              </Bounded>
          )}
          {slice.variation === "3Columns" &&(
              <Bounded
                  data-slice-type={slice.slice_type}
                  data-slice-variation={slice.variation}
              >
                  <PrismicRichText
                      field={slice.primary.heading}
                      components={components}
                  />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                      {news.results.map((item,index) => (
                          <div key={index} className="border bg-white shadow-lg rounded-lg grid content-start">
                              <div>
                                  <PrismicNextImage
                                      width={800}
                                      height={300}
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
                  <div className="flex gap-4 items-center justify-center sm:flex-row flex-col py-4">
                      <Button
                          field=""
                          className="bg-orange-500 hover:bg-orange-700"
                      >
                          Previous
                      </Button>
                      <Button
                          field=""
                          className="bg-orange-700 hover:bg-orange-900"
                      >
                          Next
                      </Button>
                  </div>
              </Bounded>
          )}
      </>
  );
};

export default ListNews;