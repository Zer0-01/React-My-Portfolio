/** The A_ cursor mark from the favicon; the gold cursor blinks while the logo is hovered or focused. */
export function CursorMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 shrink-0">
      <rect width="32" height="32" rx="4" className="fill-primary" />
      <path
        className="fill-primary-foreground"
        fillRule="evenodd"
        d="M4 25L10 7H14L20 25H16.6L15.27 21H8.73L7.4 25ZM9.73 18H14.27L12 11.2Z"
      />
      <rect
        x="22"
        y="22"
        width="6"
        height="3"
        className="fill-gold group-hover:animate-cursor-blink group-focus-visible:animate-cursor-blink"
      />
    </svg>
  );
}
