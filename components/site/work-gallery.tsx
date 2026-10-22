import Image from "next/image"

import { workPhotos } from "@/lib/site"

export function WorkGallery() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="flex items-baseline justify-between">
        <p className="text-label">Selected work</p>
        <p className="text-xs text-muted-foreground">
          {String(workPhotos.length).padStart(2, "0")} photographs
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
        {workPhotos.map((photo) => (
          <figure key={photo.src} className={`group ${photo.className}`}>
            <div className={`relative w-full overflow-hidden ${photo.aspect}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className="object-cover transition-opacity duration-500 group-hover:opacity-90"
              />
            </div>
            <figcaption className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>{photo.title}</span>
              <span>{photo.year}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
