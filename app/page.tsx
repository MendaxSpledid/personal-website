import { Contact } from "@/components/site/contact"
import { Hero } from "@/components/site/hero"
import { Pricing } from "@/components/site/pricing"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { WorkGallery } from "@/components/site/work-gallery"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <div className="border-t border-border/60">
          <WorkGallery />
        </div>
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
