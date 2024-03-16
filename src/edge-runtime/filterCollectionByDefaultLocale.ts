import { defaultLocale } from "./config";

export function filterCollectionByDefaultLocale(entry: unknown) {
  if (
    typeof entry === "object" &&
    entry !== null &&
    "slug" in entry &&
    typeof entry.slug === "string"
  ) {
    if (entry.slug.startsWith(defaultLocale + "/")) {
      return true;
    }
  }
  return false;
}
