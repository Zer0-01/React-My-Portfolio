import { OutlineLinkButton } from "@/components/custom/OutlineLinkButton";
import { contactHref } from "@/data/profile";

interface ContactButtonProps {
  className?: string;
}

/** Secondary call to action used in the site navigation. */
export function ContactButton({ className }: ContactButtonProps) {
  return (
    <OutlineLinkButton href={contactHref} newTabHint="opens WhatsApp in a new tab" className={className}>
      Let&apos;s talk
    </OutlineLinkButton>
  );
}
