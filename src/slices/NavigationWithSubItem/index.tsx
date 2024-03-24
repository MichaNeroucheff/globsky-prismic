import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavigationWithSubItem`.
 */
export type NavigationWithSubItemProps =
  SliceComponentProps<Content.NavigationWithSubItemSlice>;

/**
 * Component for "NavigationWithSubItem" Slices.
 */
const NavigationWithSubItem = ({
  slice,
}: NavigationWithSubItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navigation_with_sub_item (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default NavigationWithSubItem;
