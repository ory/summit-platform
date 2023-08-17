import { Venue } from "@/app/blocks/venue"
import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import { cn } from "@/utils/cn"
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types"
import { About } from "./blocks/about"
import { Hero } from "./blocks/hero"
import { dividerStyles } from "./components/dividerStyles"

// Instruct browser to preload both background images to make theme switches smoother
export const metadata = {
  icons: {
    other: [
      {
        rel: "preload",
        url: bgLightStill.src,
        as: "image",
      } as IconDescriptor,
      {
        rel: "preload",
        url: bgDarkStill.src,
        as: "image",
      } as IconDescriptor,
    ],
  },
}

export default function Page() {
  const paddingClassnames = "p-6 sm:p-12 md:py-24 lg:p-24"

  return (
    <main className={cn("flex flex-1 flex-col")}>
      <div
        className={cn(
          dividerStyles,
          paddingClassnames,
          "relative flex flex-col items-center justify-end md:justify-start",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <Hero />
      </div>
      <div
        className={cn(paddingClassnames, dividerStyles, "flex justify-center")}
        id="about"
      >
        <About />
      </div>
      <div className={cn(dividerStyles, "relative h-screen")} id="venue">
        <Venue />
      </div>
    </main>
  )
}
