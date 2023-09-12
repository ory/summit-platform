import { Agenda } from "@/app/(summit-pages)/blocks/agenda"
import { Speakers } from "@/app/(summit-pages)/blocks/speakers"
import { Venue } from "@/app/(summit-pages)/blocks/venue"
import { TalksDialog } from "@/app/components/talks-dialog"
import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import { cn } from "@/utils/cn"
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types"
import { getSpeakers, getTalks } from "../../../sanity/lib/client"
import { dividerStyles } from "../components/dividerStyles"
import { About } from "./blocks/about"
import { Hero } from "./blocks/hero"

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

export default async function Page() {
  const paddingClassnames = "p-[--ory-global-padding] md:py-24"
  const talks = await getTalks()
  const speakers = await getSpeakers()

  return (
    <main className={cn("flex flex-1 flex-col")}>
      <TalksDialog />
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
      {speakers.length > 0 ? (
        <div
          id="speakers"
          className={cn(
            paddingClassnames,
            dividerStyles,
            "flex justify-center py-32 md:py-32 lg:py-32 lg:[--ory-global-padding:6rem]",
          )}
        >
          <Speakers />
        </div>
      ) : null}
      {talks?.length > 0 ? (
        <div
          id="agenda"
          className={cn(
            paddingClassnames,
            dividerStyles,
            "flex justify-center py-16",
            "bg-gray-100 dark:bg-indigo-900",
          )}
        >
          <Agenda />
        </div>
      ) : null}
      <div className={cn(dividerStyles, "relative isolate")} id="venue">
        <Venue />
      </div>
    </main>
  )
}
