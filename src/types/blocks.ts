// import type { Metadata, Navigation, Image, Video, Link } from '../types/index';

// /* Form Picker */
// export type DefaultUmbracoFormSubmitData = Partial<{
//   dataConsent: boolean;
//   email: string;
//   message: string;
//   name: string;
//   phoneNumber: string;
//   checkbox: boolean;
// }>;

// export type UmbracoFormFieldConditionRule = {
//   content?: string;
// };

// export type UmbracoFormFieldCondition = {
//   actionType: string;
//   logicType: string;
//   rules: UmbracoFormFieldConditionRule[];
// };

// export type UmbracoFormFieldSettings = {
//   defaultValue?: string;
//   allowMultipleSelections?: string;
//   placeholder?: string;
//   showLabel: 'True' | 'False';
//   autocompleteAttribute?: string;
//   selectPrompt?: string;
//   numberOfRows?: number;
//   maximumLength?: number;
//   fieldType?: string;
// };

// export type UmbracoFormFieldPreValue = {
//   value?: string;
//   caption?: string;
// };

// export type UmbracoFormField = {
//   caption: string;
//   helpText?: string;
//   placeholder?: string;
//   cssClass?: string;
//   alias: string;
//   required: boolean;
//   requiredErrorMessage?: string;
//   condition?: UmbracoFormFieldCondition;
//   settings: UmbracoFormFieldSettings;
//   preValues: UmbracoFormFieldPreValue[];
//   type: string;
// };

// export type UmbracoFormColumn = {
//   caption?: string;
//   width: number;
//   fields: UmbracoFormField[];
// };

// export type UmbracoFormFieldset = {
//   caption: string;
//   condition?: string;
//   columns: UmbracoFormColumn[];
// };

// export type UmbracoFormPage = {
//   caption: string;
//   fieldsets: UmbracoFormFieldset[];
// };

// export type UmbracoFormData = {
//   _id: string;
//   indicator: string;
//   name: string;
//   cssClass?: string;
//   nextLabel: string;
//   previousLabel: string;
//   submitLabel: string;
//   disableDefaultStylesheet: boolean;
//   fieldIndicationType: string;
//   hideFieldValidation: boolean;
//   messageOnSubmit: string;
//   showValidationSummary: boolean;
//   gotoPageOnSubmit?: string;
//   pages: UmbracoFormPage[];
// };

// export type UmbracoForm = {
//   formPicker: UmbracoFormData;
// };

// /* Image Slider */
// export type ImageSliderData = {
//   images: Image[];
// };

// /* Google Maps */

// /* RTE */
// export type RTEBlock = {
//   richText: string;
// };

// /* Text with Text */
// export type TwoColumnTextData = {
//   leftColumn: string;
//   rightColumn: string;
// };

// /* Text with Image */
// export type TextWithImageData = {
//   image: Image;
//   text: string;
//   cta: Link;
//   reverse: boolean;
// };

// /* Image */
// export type ImageData = {
//   image: Image;
// };

// /* Video */
// export type VideoData = {
//   autoplay: boolean;
//   image: Image;
//   video?: Video;
//   id?: string;
//   platform?: string;
//   headline?: string;
//   subline?: string;
//   cta?: Link;
// };

// /* Spot Dynamic */
// export type SpotDynamicItemContent = {
//   shortDescription: string;
//   title: string;
//   media: Image;
//   date: Date;
//   url: string;
//   name: string;
// };

// export type SpotDynamicItem = {
//   alias: string;
//   content: SpotDynamicItemContent;
//   metadata: Metadata;
//   navigation: Navigation;
// };

// export type SpotDynamicListItem = {
//   name: string;
//   url: string;
// };

// export type SpotDynamicContent = {
//   headline: string;
//   description: string;
//   spotPicker: SpotDynamicItemContent[];
// };

// /* Spot Manual */
// export type SpotManualItem = {
//   image?: Image;
//   video?: Video;
//   spotHeadline?: string;
//   spotDescription?: string;
//   spotLink?: Link;
//   platform?: string;
//   videoId?: string;
// };

// export type SpotManualContent = {
//   alias: string;
//   content: SpotManualItem;
// };

// export type SpotManualData = {
//   title?: string;
//   description?: string;
//   spotPicker: SpotManualContent[];
// };

// /* Employees */
// export type Employee = {
//   name: string;
//   url: string;
//   title?: string;
//   phone?: string;
//   email?: string;
//   image: Image;
//   businessArea?: string[];
// };

// export type EmployeeData = {
//   header?: string;
//   subtext?: string;
//   employees: Employee[];
//   imagePortrait: boolean;
// };

// /* Quote */
// export type QuoteBlockContent = {
//   image: Image;
//   imageBrightness?: number;
//   quoteText: string;
//   quotePerson?: string;
// };

// export type HeroItemContent = {
//   heroHeading: string;
//   heroSubHeading: string;
//   heroImage?: Image;
//   heroCallToAction?: Link[];
//   heroVideo?: Video;
//   heroImageBrightness?: number;
// };

// export type HeroItem = {
//   alias: string;
//   content: HeroItemContent;
// };

// export type Hero = {
//   alias: string;
//   content: HeroItem[];
// };
