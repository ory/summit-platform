import { Agenda } from "@/app/(summit-pages)/blocks/agenda"
import { Speakers } from "@/app/(summit-pages)/blocks/speakers"
import { Venue } from "@/app/(summit-pages)/blocks/venue"
import { TalksDialog } from "@/app/components/talks-dialog"
import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import { cn } from "@/utils/cn"
import { getReadableSpeakerList } from "@/utils/talk-utils"
import { Metadata } from "next"
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types"
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"
import { match, P } from "ts-pattern"
import { getSpeakers, getTalks } from "../../../sanity/lib/client"
import { urlForImage } from "../../../sanity/lib/image"
import { dividerStyles } from "../components/dividerStyles"
import { About } from "./blocks/about"
import { Hero } from "./blocks/hero"

export const generateMetadata = async ({ searchParams }): Promise<Metadata> => {
  const defaultOpenGraphProps = {
    siteName: "Ory Summit 2023",
    locale: "en_US",
    type: "website",
    images: [
      {
        alt: "",
        url: bgDarkStill.src,
      },
    ],
  } satisfies Partial<OpenGraph>

  return {
    // Instruct browser to preload both background images to make theme switches smoother
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
    openGraph: (await match(searchParams)
      .with(
        { viewSpeaker: P.string.select() },
        async (speakerSlug): Promise<OpenGraph | undefined> => {
          const speakers = await getSpeakers()
          const speaker = speakers.find(
            (speaker) => speaker.slug.current === speakerSlug,
          )
          if (!speaker) return undefined

          return {
            ...defaultOpenGraphProps,
            title: `${speaker.name} is speaking at Ory Summit 2023!`,
            description: `Ory Summit is happening again on 9 November 2023, starring ${speaker.name}! View more about them and their session on this page.`,
            images: [
              {
                url: urlForImage(speaker.profilePicture)?.url(),
                alt: `${speaker.name}'s profile picture`,
              },
            ],
          }
        },
      )
      .with(
        { viewSession: P.string.select() },
        async (talkSlug): Promise<OpenGraph | undefined> => {
          const talks = await getTalks()
          const talk = talks.find((talk) => talk.slug.current === talkSlug)
          if (!talk) return undefined

          const speakerList = getReadableSpeakerList(talk)

          return {
            ...defaultOpenGraphProps,
            title: `"${talk.title}" by ${speakerList} at Ory Summit 2023`,
            description: talk.summary,
          }
        },
      )
      .otherwise(() => undefined)) ?? {
      ...defaultOpenGraphProps,
      title: "Ory Summit 2023",
      description:
        "A global, one-day conference around first party data, privacy, application authorisation, identity, authentication, end-to-end security based on zero trust principles.",
    },
  }
}

export const revalidate = 1

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
