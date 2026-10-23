import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-10 pt-16 md:flex-row md:items-end md:justify-between md:px-8">
      <div>
        <p className="font-mono text-xl font-semibold">Anas Zulkifli</p>
        <p className="mt-2 text-sm text-secondary-foreground">Product-focused developer</p>
      </div>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-foreground">
        <Link href="/">Home</Link>
        <Link href="/#work">Work</Link>
        <a href="https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Zer0-01" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
  );
}
