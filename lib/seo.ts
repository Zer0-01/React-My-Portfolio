export const siteUrl = "https://anaszulkifli.dev";
export const siteName = "Anas Zulkifli";
export const siteLocale = "en_MY";
export const siteLanguage = "en-MY";

/** Kept under ~60 characters so search results show it whole. */
export const siteTitle = "Anas Zulkifli | Software Engineer in Malaysia · Flutter";
export const siteDescription =
  "Software engineer in Kuala Lumpur, Malaysia, building Flutter mobile apps and Next.js web apps from idea to launch. Open to full-time roles and freelance projects.";

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

/** Link previews come from app/opengraph-image.tsx; this photo is for structured data. */
export const profileImage = "/profile-picture.jpeg";

/** Absolute URL for a site path, as structured data requires. */
export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

/** Escapes `<` so the JSON cannot close the surrounding script tag. */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
