import { Content } from "@prismicio/client";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {JSXMapSerializer, PrismicRichText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";

const components: JSXMapSerializer = {
    heading1: ({children}) => (
        <Heading
            as="h1"
            size="lg"
            className="md:mb-4 mb-2 mt-8"
        >
            {children}
        </Heading>
    ),
  heading2: ({children}) => (
      <Heading
          as="h2"
          size="md"
          className="md:mb-4 mb-2 mt-8"
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
  heading4: ({children}) => (
      <Heading
          as="h4"
          size="xs"
          className="md:mb-2 mb-2 mt-4"
      >
        {children}
      </Heading>
  ),
  paragraph: ({children}) => (
      <p
          className="md:text-xl test-md font-normal font-body text-slate-600"
      >
        {children}
      </p>
  ),
}

/**
 * Props for `FreeText`.
 */
export type FreeTextProps = SliceComponentProps<Content.FreeTextSlice>;

/**
 * Component for "FreeText" Slices.
 */
const FreeText = ({ slice }: FreeTextProps): JSX.Element => {
  return (
      <>
        {slice.variation === "default" &&(
            <Bounded
                data-slice-type={slice.slice_type}
                data-slice-variation={slice.variation}
            >
                <div className="">
                    <PrismicRichText
                        field={slice.primary.heading}
                        components={components}
                    />
                </div>
                <div className="">
                <PrismicRichText
                    field={slice.primary.body}
                    components={components}
                />
              </div>
            </Bounded>
        )}
        {slice.variation === "2Columns" &&(
            <Bounded
                data-slice-type={slice.slice_type}
                data-slice-variation={slice.variation}
            >
                <div className="">
                    <PrismicRichText
                        field={slice.primary.heading}
                        components={components}
                    />
                </div>
                <div className="md:columns-2 xl:gap-20 lg:gap-10">
                <PrismicRichText
                    field={slice.primary.body}
                    components={components}
                />
              </div>
            </Bounded>
        )}
        {slice.variation === "3Columns" &&(
            <Bounded
                data-slice-type={slice.slice_type}
                data-slice-variation={slice.variation}
            >
                <div className="">
                    <PrismicRichText
                        field={slice.primary.heading}
                        components={components}
                    />
                </div>
                <div className="md:columns-3 xl:gap-20 lg:gap-10">
                <PrismicRichText
                    field={slice.primary.body}
                    components={components}
                />
              </div>
            </Bounded>
        )}
      </>

  );
};

export default FreeText;
