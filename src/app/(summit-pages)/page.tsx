import { About } from "@/app/(summit-pages)/blocks/about"
import {
  ContentBelowHero,
  contentBlockPaddingClassname,
} from "@/app/(summit-pages)/content-below-hero"
import { TalksDialog } from "@/app/components/talks-dialog"
import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import { cn } from "@/utils/cn"
import { getReadableSpeakerList } from "@/utils/talk-utils"
import { Metadata } from "next"
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types"
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"
import { match, P } from "ts-pattern"
import { urlForImage } from "../../../sanity/lib/image"
import { getSpeakers, getTalks } from "../../../sanity/lib/sanityClient"
import { dividerStyles } from "../components/dividerStyles"
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
          const authorText = speakerList ? "" : ` by ${speakerList}`

          return {
            ...defaultOpenGraphProps,
            title: `"${talk.title}"${authorText} at Ory Summit 2023`,
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

export const revalidate = 600 // every 10 minutes

export default async function DefaultSummitPage() {
  return (
    <main className={cn("flex flex-1 flex-col")}>
      <TalksDialog />
      <div
        className={cn(
          dividerStyles,
          contentBlockPaddingClassname,
          "relative flex flex-col items-center justify-end md:justify-start",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <Hero />
      </div>
      <div
        className={cn(
          contentBlockPaddingClassname,
          dividerStyles,
          "flex justify-center",
        )}
        id="about"
      >
        <About />
      </div>
      <ContentBelowHero />
    </main>
  )
}
