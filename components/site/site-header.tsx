import { site } from "@/lib/site"

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-heading text-xl tracking-wide transition-opacity hover:opacity-70"
        >
          {site.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 sm:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-label transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
