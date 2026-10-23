export const site = {
  // TODO: replace with your own name, location, and email address.
  name: "Mara Voss",
  role: "Photographer",
  location: "Copenhagen, Denmark",
  email: "hello@example.com",
  // Used as the page description for search engines and link previews.
  description:
    "Portraits, interiors, and quiet landscapes. Selected work, pricing, and contact.",
}

export const intro = {
  label: "Photographer — Copenhagen",
  headline: "Quiet photographs of people, places, and the light in between.",
  body: "I'm Mara. I photograph portraits, interiors, and slow landscapes — in natural light, at an unhurried pace, often on film. Below is a small selection of recent work, followed by how we might work together.",
}

export type Photo = {
  src: string
  alt: string
  title: string
  year: string
  /** Grid span and aspect ratio classes for the gallery layout. */
  className: string
  aspect: string
  sizes: string
}

// Placeholder photographs — sourced from picsum.photos (grayscale, to keep
// the placeholder set cohesive) and stored in public/images/. To use your
// own work, either:
//   1. drop your file into public/images/ and point `src` at it, or
//   2. add your file anywhere under public/ and update `src` to its path.
// Update `alt`, `title`, and `year` to match each real photograph.
export const heroPhoto: Photo = {
  src: "/images/hero.jpg",
  alt: "Placeholder photograph — a mountain ridge above a still lake",
  title: "Midsummer light",
  year: "2025",
  className: "",
  aspect: "aspect-[16/9]",
  sizes: "(min-width: 1152px) 1104px, calc(100vw - 3rem)",
}

export const workPhotos: Photo[] = [
  {
    src: "/images/work-01.jpg",
    alt: "Placeholder photograph — a river running between mountainsides",
    title: "Northerly",
    year: "2025",
    className: "md:col-span-5",
    aspect: "aspect-[4/5]",
    sizes: "(min-width: 1152px) 448px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-02.jpg",
    alt: "Placeholder photograph — an aerial view of winding roads",
    title: "Overland",
    year: "2024",
    className: "md:col-span-7 md:mt-32",
    aspect: "aspect-[3/2]",
    sizes: "(min-width: 1152px) 632px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-03.jpg",
    alt: "Placeholder photograph — canyon walls in raking light",
    title: "Canyon walls",
    year: "2024",
    className: "md:col-span-7",
    aspect: "aspect-[3/2]",
    sizes: "(min-width: 1152px) 632px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-04.jpg",
    alt: "Placeholder photograph — fog settling over a mountain ridge",
    title: "First frost",
    year: "2025",
    className: "md:col-span-5 md:mt-32",
    aspect: "aspect-[4/5]",
    sizes: "(min-width: 1152px) 448px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-05.jpg",
    alt: "Placeholder photograph — a facade in even daylight",
    title: "Rooftops",
    year: "2023",
    className: "md:col-span-4",
    aspect: "aspect-square",
    sizes: "(min-width: 1152px) 352px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-06.jpg",
    alt: "Placeholder photograph — tall grass in soft light",
    title: "Long grass",
    year: "2023",
    className: "md:col-span-4",
    aspect: "aspect-square",
    sizes: "(min-width: 1152px) 352px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-07.jpg",
    alt: "Placeholder photograph — a quiet shoreline",
    title: "Harbour wall",
    year: "2023",
    className: "md:col-span-4",
    aspect: "aspect-square",
    sizes: "(min-width: 1152px) 352px, calc(100vw - 3rem)",
  },
  {
    src: "/images/work-08.jpg",
    alt: "Placeholder photograph — a long view across open country",
    title: "Coast road",
    year: "2025",
    className: "md:col-span-12",
    aspect: "aspect-[21/9]",
    sizes: "(min-width: 1152px) 1104px, calc(100vw - 3rem)",
  },
]

export const pricing = [
  {
    name: "Portrait session",
    description:
      "A relaxed sitting in natural light, somewhere you love. Around ninety minutes, ending with twenty-five finished photographs.",
    price: "from €350",
  },
  {
    name: "Editorial & commissions",
    description:
      "Assignments for magazines, studios, and brands. A day covers pre-production, direction on set, and retouching afterwards.",
    price: "from €1,200 / day",
  },
  {
    name: "Prints",
    description:
      "Selected photographs, printed on archival paper in small numbered editions. Framing can be arranged on request.",
    price: "from €120",
  },
]

export const pricingNote = `Travel within ${site.location} is included; further destinations are quoted individually. Every engagement begins with a short conversation — write a few lines about what you have in mind and I'll come back within two days.`
