import { ogImageContentType, ogImageSize, renderOgCard } from "@/lib/ogImage";
import { siteName } from "@/lib/seo";

export const alt = "Anas Zulkifli, software engineer in Kuala Lumpur, Malaysia";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Software Engineer · Kuala Lumpur, Malaysia",
    title: siteName,
    description: "I build digital products from idea to launch: Flutter mobile apps and Next.js web apps.",
    footer: "Open to full-time roles and freelance projects",
  });
}
