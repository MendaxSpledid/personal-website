import { site } from "@/lib/site"

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 py-28 text-center sm:py-36"
    >
      <p className="text-label">Contact</p>
      <h2 className="mt-6 font-heading text-[clamp(2.5rem,6vw,4rem)] leading-tight font-light">
        Say hello.
      </h2>
      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        For commissions, prints, or a simple question — I read everything and
        reply within a couple of days.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-12 inline-block font-heading text-2xl font-light italic underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:text-3xl"
      >
        {site.email}
      </a>
      <p className="mt-20 text-xs tracking-[0.14em] text-muted-foreground uppercase">
        {site.location} — working worldwide
      </p>
    </section>
  )
}
