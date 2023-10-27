import {
  ContentBelowHero,
  contentBlockPaddingClassname,
} from "@/app/(summit-pages)/content-below-hero"
import { LivestreamHero } from "@/app/(summit-pages)/live/livestream-hero"
import { dividerStyles } from "@/app/components/dividerStyles"
import { TalksDialog } from "@/app/components/talks-dialog"
import { cn } from "@/utils/cn"

export default async function LivePage() {
  return (
    <main className={cn("flex flex-1 flex-col")}>
      <TalksDialog />
      <div
        className={cn(
          dividerStyles,
          contentBlockPaddingClassname,
          "relative flex flex-col items-center justify-end py-2 sm:py-8 md:justify-start md:py-16",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <LivestreamHero />
      </div>
      <ContentBelowHero />
    </main>
  )
}
