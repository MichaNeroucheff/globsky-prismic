// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Navigation*
 */
export interface NavigationDocumentDataNavigationItem {
  /**
   * Link field in *Navigation → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Navigation → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Navigation field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<
    Simplify<NavigationDocumentDataNavigationItem>
  >;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type NavigationwithsubDocumentDataSlicesSlice = NavigationWithSubItemSlice;

/**
 * Content for NavigationWithSub documents
 */
interface NavigationwithsubDocumentData {
  /**
   * Name field in *NavigationWithSub*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigationwithsub.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *NavigationWithSub*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigationwithsub.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationwithsubDocumentDataSlicesSlice>;
}

/**
 * NavigationWithSub document from Prismic
 *
 * - **API ID**: `navigationwithsub`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationwithsubDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationwithsubDocumentData>,
    "navigationwithsub",
    Lang
  >;

type NewsDocumentDataSlicesSlice =
  | LatestNewsSlice
  | TextWithImageSlice
  | TestimonialsSlice
  | HeroSlice
  | FreeTextSlice
  | CallToActionSlice;

/**
 * Content for News documents
 */
interface NewsDocumentData {
  /**
   * Title field in *News*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Topic field in *News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.topic
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  topic: prismic.RichTextField;

  /**
   * Featured Image field in *News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *News*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: news.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NewsDocumentDataSlicesSlice> /**
   * Meta Description field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: news.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: news.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;

type PageDocumentDataSlicesSlice =
  | ListNewsSlice
  | LatestNewsSlice
  | CallToActionSlice
  | TextWithImageSlice
  | TestimonialsSlice
  | HeroSlice
  | FreeTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
  /**
   * Name field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Job Title field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.job_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  job_title: prismic.KeyTextField;

  /**
   * Quote field in *Testimonial*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.quote
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField;

  /**
   * Avatar field in *Testimonial*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestimonialDocumentData>,
    "testimonial",
    Lang
  >;

export type AllDocumentTypes =
  | NavigationDocument
  | NavigationwithsubDocument
  | NewsDocument
  | PageDocument
  | SettingsDocument
  | TestimonialDocument;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Heading field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *FreeText → Primary*
 */
export interface FreeTextSliceDefaultPrimary {
  /**
   * Heading field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for FreeText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreeTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FreeTextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *FreeText → Primary*
 */
export interface FreeTextSlice2ColumnsPrimary {
  /**
   * Heading field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * 2 Columns variation for FreeText Slice
 *
 * - **API ID**: `2Columns`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreeTextSlice2Columns = prismic.SharedSliceVariation<
  "2Columns",
  Simplify<FreeTextSlice2ColumnsPrimary>,
  never
>;

/**
 * Primary content in *FreeText → Primary*
 */
export interface FreeTextSlice3ColumnsPrimary {
  /**
   * Heading field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *FreeText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: free_text.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * 3 Columns variation for FreeText Slice
 *
 * - **API ID**: `3Columns`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreeTextSlice3Columns = prismic.SharedSliceVariation<
  "3Columns",
  Simplify<FreeTextSlice3ColumnsPrimary>,
  never
>;

/**
 * Slice variation for *FreeText*
 */
type FreeTextSliceVariation =
  | FreeTextSliceDefault
  | FreeTextSlice2Columns
  | FreeTextSlice3Columns;

/**
 * FreeText Shared Slice
 *
 * - **API ID**: `free_text`
 * - **Description**: FreeText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FreeTextSlice = prismic.SharedSlice<
  "free_text",
  FreeTextSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceHorizontalPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Horizontal variation for Hero Slice
 *
 * - **API ID**: `horizontal`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHorizontal = prismic.SharedSliceVariation<
  "horizontal",
  Simplify<HeroSliceHorizontalPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHorizontal;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *LatestNews → Primary*
 */
export interface LatestNewsSliceDefaultPrimary {
  /**
   * Heading field in *LatestNews → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: latest_news.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Button Text field in *LatestNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: latest_news.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for LatestNews Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LatestNewsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LatestNewsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LatestNews*
 */
type LatestNewsSliceVariation = LatestNewsSliceDefault;

/**
 * LatestNews Shared Slice
 *
 * - **API ID**: `latest_news`
 * - **Description**: LatestNews
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LatestNewsSlice = prismic.SharedSlice<
  "latest_news",
  LatestNewsSliceVariation
>;

/**
 * Primary content in *ListNews → Primary*
 */
export interface ListNewsSliceDefaultPrimary {
  /**
   * Heading field in *ListNews → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Button Text field in *ListNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for ListNews Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListNewsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ListNewsSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ListNews → Primary*
 */
export interface ListNewsSlice2ColumnsPrimary {
  /**
   * Heading field in *ListNews → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Button Text field in *ListNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * 2 Columns variation for ListNews Slice
 *
 * - **API ID**: `2Columns`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListNewsSlice2Columns = prismic.SharedSliceVariation<
  "2Columns",
  Simplify<ListNewsSlice2ColumnsPrimary>,
  never
>;

/**
 * Primary content in *ListNews → Primary*
 */
export interface ListNewsSlice3ColumnsPrimary {
  /**
   * Heading field in *ListNews → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Button Text field in *ListNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_news.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * 3 Columns variation for ListNews Slice
 *
 * - **API ID**: `3Columns`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListNewsSlice3Columns = prismic.SharedSliceVariation<
  "3Columns",
  Simplify<ListNewsSlice3ColumnsPrimary>,
  never
>;

/**
 * Slice variation for *ListNews*
 */
type ListNewsSliceVariation =
  | ListNewsSliceDefault
  | ListNewsSlice2Columns
  | ListNewsSlice3Columns;

/**
 * ListNews Shared Slice
 *
 * - **API ID**: `list_news`
 * - **Description**: ListNews
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListNewsSlice = prismic.SharedSlice<
  "list_news",
  ListNewsSliceVariation
>;

/**
 * Primary content in *NavigationWithSubItem → Primary*
 */
export interface NavigationWithSubItemSliceDefaultPrimary {
  /**
   * Title field in *NavigationWithSubItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_with_sub_item.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * link field in *NavigationWithSubItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_with_sub_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavigationWithSubItem → Items*
 */
export interface NavigationWithSubItemSliceDefaultItem {
  /**
   * Child title field in *NavigationWithSubItem → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_with_sub_item.items[].child_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  child_title: prismic.KeyTextField;

  /**
   * Child link field in *NavigationWithSubItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_with_sub_item.items[].child_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  child_link: prismic.LinkField;
}

/**
 * Default variation for NavigationWithSubItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationWithSubItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationWithSubItemSliceDefaultPrimary>,
  Simplify<NavigationWithSubItemSliceDefaultItem>
>;

/**
 * Slice variation for *NavigationWithSubItem*
 */
type NavigationWithSubItemSliceVariation = NavigationWithSubItemSliceDefault;

/**
 * NavigationWithSubItem Shared Slice
 *
 * - **API ID**: `navigation_with_sub_item`
 * - **Description**: NavigationWithSubItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationWithSubItemSlice = prismic.SharedSlice<
  "navigation_with_sub_item",
  NavigationWithSubItemSliceVariation
>;

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Heading field in *Testimonials → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceDefaultItem {
  /**
   * Testimonial field in *Testimonials → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].testimonial
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  testimonial: prismic.ContentRelationshipField<"testimonial">;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  Simplify<TestimonialsSliceDefaultItem>
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceImageRightPrimary {
  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Image Right variation for TextWithImage Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<TextWithImageSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceImageRight;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavigationItem,
      NavigationwithsubDocument,
      NavigationwithsubDocumentData,
      NavigationwithsubDocumentDataSlicesSlice,
      NewsDocument,
      NewsDocumentData,
      NewsDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      TestimonialDocument,
      TestimonialDocumentData,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      FreeTextSlice,
      FreeTextSliceDefaultPrimary,
      FreeTextSlice2ColumnsPrimary,
      FreeTextSlice3ColumnsPrimary,
      FreeTextSliceVariation,
      FreeTextSliceDefault,
      FreeTextSlice2Columns,
      FreeTextSlice3Columns,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceHorizontalPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHorizontal,
      LatestNewsSlice,
      LatestNewsSliceDefaultPrimary,
      LatestNewsSliceVariation,
      LatestNewsSliceDefault,
      ListNewsSlice,
      ListNewsSliceDefaultPrimary,
      ListNewsSlice2ColumnsPrimary,
      ListNewsSlice3ColumnsPrimary,
      ListNewsSliceVariation,
      ListNewsSliceDefault,
      ListNewsSlice2Columns,
      ListNewsSlice3Columns,
      NavigationWithSubItemSlice,
      NavigationWithSubItemSliceDefaultPrimary,
      NavigationWithSubItemSliceDefaultItem,
      NavigationWithSubItemSliceVariation,
      NavigationWithSubItemSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceDefaultItem,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
      TextWithImageSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceImageRightPrimary,
      TextWithImageSliceVariation,
      TextWithImageSliceDefault,
      TextWithImageSliceImageRight,
    };
  }
}
