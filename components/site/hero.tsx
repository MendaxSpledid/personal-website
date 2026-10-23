import Image from "next/image"

import { heroPhoto, intro, site } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24">
      <div className="pt-36 pb-20 sm:pt-44">
        <p className="text-label">{intro.label}</p>
        <h1 className="mt-6 max-w-3xl font-heading text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.05] font-light tracking-[-0.01em] text-balance">
          {intro.headline}
        </h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {intro.body}
        </p>
        <div className="mt-12 flex items-center gap-10 text-sm">
          <a
            href="#work"
            className="underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
          >
            Selected work
          </a>
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-transparent underline-offset-8 transition-colors hover:decoration-foreground"
          >
            Write to me
          </a>
        </div>
      </div>
      <figure>
        <div className={`relative w-full overflow-hidden ${heroPhoto.aspect}`}>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            preload
            sizes={heroPhoto.sizes}
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>{heroPhoto.title}</span>
          <span>{heroPhoto.year}</span>
        </figcaption>
      </figure>
    </section>
  )
}
