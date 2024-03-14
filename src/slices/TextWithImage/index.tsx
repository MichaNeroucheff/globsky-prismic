import { Content } from "@prismicio/client";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {JSXMapSerializer, PrismicRichText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading
          as="h2"
          size="md"
          className="md:mb-4 mb-2 mt-8"
      >
        {children}
      </Heading>
  ),
  paragraph: ({children}) => (
      <p
          className="md:text-xl test-md font-normal font-body text-slate-600 mb-2 md:mb-4 max-w-md"
      >
        {children}
      </p>
  ),
}

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
    SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="grid md:grid-cols-2 place-items-center">
          <PrismicNextImage
              field={slice.primary.image}
              className={clsx(
                  "drop-shadow-xl rounded-lg",
                  slice.variation === "imageRight" && "md:order-2"
              )}
          />
          <div className="grid gap-4">
            <PrismicRichText
                field={slice.primary.heading}
                components={components}
            />
            <PrismicRichText
                field={slice.primary.body}
                components={components}
            />
          </div>
        </div>
      </Bounded>
  );
};

export default TextWithImage;
