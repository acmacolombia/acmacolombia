export {
  defaultLocale,
  locales,
  localeKeys,
  trailingSlash,
  build,
  BASE_URL,
} from "./config";
export { filterCollectionByDefaultLocale } from "./filterCollectionByDefaultLocale";
export { getCollectionParamsSlug } from "./getCollectionParamsSlug";
export { getAllLocaleUrls } from "./getAllLocaleUrls";
export { getLocale } from "./getLocale";
export { getLocaleUrl } from "./getLocaleUrl";
export { getLocaleUrlPrefix } from "./getLocaleUrlPrefix";
export { getUrlWithoutLocale } from "./getUrlWithoutLocale";
export { resolveTrailingSlash } from "./resolveTrailingSlash";
export { defaultI18nConfig } from "../shared";
export type {
  UserI18nConfig,
  UserFilterSitemapByDefaultLocaleConfig,
} from "../shared";
