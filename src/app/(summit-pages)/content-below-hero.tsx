import { Agenda } from "@/app/(summit-pages)/blocks/agenda"
import { Speakers } from "@/app/(summit-pages)/blocks/speakers"
import { Venue } from "@/app/(summit-pages)/blocks/venue"
import { dividerStyles } from "@/app/components/dividerStyles"
import { cn } from "@/utils/cn"
import { getSpeakers, getTalks } from "../../../sanity/lib/sanityClient"

export const contentBlockPaddingClassname = "p-[--ory-global-padding] md:py-24"

export const revalidate = 600 // every 10 minutes

export const ContentBelowHero = async () => {
  const talks = await getTalks()
  const speakers = await getSpeakers()

  return (
    <>
      {talks?.length > 0 ? (
        <div
          id="agenda"
          className={cn(
            contentBlockPaddingClassname,
            dividerStyles,
            "flex justify-center py-16",
            "bg-gray-100 dark:bg-indigo-900",
          )}
        >
          <Agenda />
        </div>
      ) : null}
      {speakers.length > 0 ? (
        <div
          id="speakers"
          className={cn(
            contentBlockPaddingClassname,
            dividerStyles,
            "flex justify-center py-32 md:py-32 lg:py-32 lg:[--ory-global-padding:6rem]",
          )}
        >
          <Speakers />
        </div>
      ) : null}
      <div className={cn(dividerStyles, "relative isolate")} id="venue">
        <Venue />
      </div>
    </>
  )
}
