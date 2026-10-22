import { pricing, pricingNote } from "@/lib/site"

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <p className="text-label">Pricing</p>
      <div className="mt-4 max-w-md">
        <h2 className="font-heading text-3xl font-light sm:text-4xl">
          Ways of working together
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Straightforward figures, so you know what to expect before we talk.
        </p>
      </div>
      <dl className="mt-12">
        {pricing.map((item) => (
          <div
            key={item.name}
            className="grid gap-3 border-t border-border/60 py-10 sm:grid-cols-[1fr_auto] sm:gap-12"
          >
            <div className="max-w-lg">
              <dt className="font-heading text-2xl font-light sm:text-3xl">
                {item.name}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </dd>
            </div>
            <dd className="text-sm tracking-wide sm:pt-2 sm:text-right sm:tabular-nums">
              {item.price}
            </dd>
          </div>
        ))}
        <div className="border-t border-border/60 pt-8">
          <p className="max-w-lg text-xs leading-relaxed text-muted-foreground">
            {pricingNote}
          </p>
        </div>
      </dl>
    </section>
  )
}
