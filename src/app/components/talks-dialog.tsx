"use client"

import { SanityImage } from "@/app/components/SanityImage"
import { TalkDetails } from "@/app/components/talk-details"
import { getPermalinkFromSpeaker, useSortedSpeakers } from "@/hooks/useSpeakers"
import {
  getPermalinkFromTalk,
  getSpeakersFromTalks,
  useTalks,
  useTalksBySpeakerId,
} from "@/hooks/useTalks"
import { cn } from "@/utils/cn"
import { getDeploymentBaseUrl } from "@/utils/get-deployment-base-url"
import { getReadableSpeakerList } from "@/utils/talk-utils"
import { Dialog } from "@headlessui/react"
import { SanityImageSource } from "@sanity/asset-utils"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MouseEventHandler, useRef } from "react"
import ReactMarkdown from "react-markdown"
import { match, P } from "ts-pattern"
import { Talk } from "../../../sanity/lib/sanityClient"
import { Speaker } from "../../../sanity.config"

type PropTypes = {
  onClose: () => void
  talks?: Talk[]
  selectedSpeaker?: Speaker
  prevItemTitle?: string
  nextItemTitle?: string
  prevItemLink?: string
  nextItemLink?: string
}

const sectionLayout =
  "grid grid-cols-1 gap-4 lg:grid-cols-[272px,1fr] lg:items-start"
const sectionPadding = "px-4 py-6 sm:px-16 sm:py-12"
const customProse = "prose dark:prose-invert"

const useFocussedTalkOrSpeaker = (): PropTypes | undefined => {
  const path = usePathname()
  const searchParams = useSearchParams()
  const allTalks = useTalks()
  const allSpeakers = useSortedSpeakers()
  const router = useRouter()
  const talksBySpeakerId = useTalksBySpeakerId()

  if (!allTalks || !allSpeakers) {
    return undefined
  }

  const speakerSlug = searchParams.get("viewSpeaker")
  const talkSlug = searchParams.get("viewSession")

  return match([talkSlug, speakerSlug])
    .with([P.string.select(), P._], (talkSlug) => {
      const talkIndex =
        allTalks?.findIndex((talk) => talk.slug.current === talkSlug) ?? NaN
      const talk = allTalks[talkIndex]
      if (!talk) return undefined
      const prevTalk = allTalks[talkIndex - 1]
      const nextTalk = allTalks[talkIndex + 1]
      return {
        talks: [talk],
        selectedSpeaker: undefined,
        onClose: () => {
          // getDeploymentBaseUrl in order to handle preview correctly
          router.push(`${getDeploymentBaseUrl()}${path}#agenda`, {
            scroll: false,
          })
        },
        prevItemTitle: prevTalk?.title,
        prevItemLink: prevTalk
          ? getPermalinkFromTalk(prevTalk, path)
          : undefined,
        nextItemTitle: nextTalk?.title,
        nextItemLink: nextTalk
          ? getPermalinkFromTalk(nextTalk, path)
          : undefined,
      } satisfies PropTypes
    })
    .with([P._, P.string.select()], (speakerSlug) => {
      const speakerIndex =
        allSpeakers?.findIndex(
          (speaker) => speaker.slug.current === speakerSlug,
        ) ?? NaN
      const speaker = allSpeakers[speakerIndex]
      if (!speaker) return undefined
      const prevSpeaker = allSpeakers[speakerIndex - 1]
      const nextSpeaker = allSpeakers[speakerIndex + 1]
      return {
        talks: talksBySpeakerId[speaker._id],
        selectedSpeaker: speaker,
        onClose: () => {
          // getDeploymentBaseUrl in order to handle preview correctly
          router.push(`${getDeploymentBaseUrl()}${path}#speakers`, {
            scroll: false,
          })
        },
        prevItemTitle: prevSpeaker?.name,
        prevItemLink: prevSpeaker
          ? getPermalinkFromSpeaker(prevSpeaker, path)
          : undefined,
        nextItemTitle: nextSpeaker?.name,
        nextItemLink: nextSpeaker
          ? getPermalinkFromSpeaker(nextSpeaker, path)
          : undefined,
      } satisfies PropTypes
    })
    .otherwise(() => undefined)
}

export const TalksDialog = () => {
  const focussedTalkOrSpeaker = useFocussedTalkOrSpeaker()
  const dialogRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  if (!focussedTalkOrSpeaker) {
    return null
  }

  const {
    talks,
    selectedSpeaker,
    onClose,
    prevItemTitle,
    nextItemTitle,
    prevItemLink,
    nextItemLink,
  } = focussedTalkOrSpeaker

  const speakersFromTalks: Speaker[] = talks ? getSpeakersFromTalks(talks) : []

  const speakers = selectedSpeaker
    ? [
        selectedSpeaker,
        ...speakersFromTalks.filter(
          (speaker) => speaker._id !== selectedSpeaker._id,
        ),
      ]
    : speakersFromTalks
  const elementType = selectedSpeaker ? "Speaker" : "Agenda Item"

  const createLocalLinkClickHandler =
    (url?: string): MouseEventHandler =>
    (event) => {
      event.preventDefault()
      dialogRef.current?.scrollTo({
        top: 0,
      })
      if (url) {
        router.push(url, {
          scroll: false,
        })
      }
    }

  return (
    <Dialog
      open={(talks?.length ?? 0) > 0 || selectedSpeaker !== undefined}
      onClose={onClose}
    >
      <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex w-screen flex-col items-center justify-center sm:p-12 md:py-24  xl:px-24">
        <div className="flex h-full w-full flex-col items-center justify-center p-2">
          <Dialog.Panel
            ref={dialogRef}
            className="relative flex h-full w-full max-w-[--ory-max-content-width] flex-grow flex-col overflow-auto bg-white py-4 dark:bg-indigo-950 sm:py-6"
          >
            <button
              className="absolute right-2 top-2 z-10 text-blue-500 dark:text-rose-500"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Close dialog"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.6129 5.2097C6.22061 4.90468 5.65338 4.93241 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929L5.2097 17.3871C4.90468 17.7794 4.93241 18.3466 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071L17.3871 18.7903C17.7794 19.0953 18.3466 19.0676 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711L18.7903 6.6129C19.0953 6.22061 19.0676 5.65338 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289L6.6129 5.2097Z"
                  fill="currentcolor"
                />
              </svg>
            </button>
            <Dialog.Title className="sr-only">
              {match(selectedSpeaker)
                .with(undefined, () => (
                  <>
                    Details about the talks
                    <ul>
                      {talks?.map((talk) => {
                        const speakersList = getReadableSpeakerList(talk)
                        return (
                          <li key={talk._id}>
                            &quot;{talk.title}&quot;
                            {speakersList && <> by {speakersList}</>}
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ))
                .otherwise((selectedSpeaker) => (
                  <>Details about {selectedSpeaker.name}</>
                ))}
            </Dialog.Title>
            {talks?.map((talk) => (
              <TalkDetails talk={talk} key={talk._id} />
            ))}
            {speakers.length > 0 && (
              <ul
                aria-label="Speaker details"
                className={cn(sectionPadding, "flex flex-col gap-12")}
              >
                {speakers.map((speaker) => (
                  <li key={speaker._id} className={cn(sectionLayout)}>
                    <div className="flex items-center gap-2">
                      <div className="relative aspect-square w-12 shrink-0 overflow-hidden rounded-full border-2 border-gray-900 dark:border-white">
                        <div className="absolute inset-0 bg-gray-300" />
                        <SanityImage
                          imageSource={
                            speaker.profilePicture as SanityImageSource
                          }
                          sizes="(min-width: 1px) 64px"
                          alt=""
                          aria-hidden
                          className="absolute inset-0 h-full w-full bg-blue-500 object-cover mix-blend-normal"
                        />
                        <div className="absolute inset-0  bg-gradient-to-tl from-blue-600 from-45% to-rose-500 to-90% mix-blend-screen dark:from-blue-800 dark:to-rose-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold leading-tight">
                          {speaker.name}
                        </span>
                        <span className="leading-tight">
                          {speaker.position}
                        </span>
                      </div>
                    </div>
                    <div className={customProse}>
                      <ReactMarkdown>{speaker.description}</ReactMarkdown>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div
              className={cn(
                sectionPadding,
                "flex flex-grow items-end py-0 sm:py-0 md:py-0 lg:py-0 xl:py-0 2xl:py-0",
              )}
            >
              <hr className="flex-grow border-blue-500 dark:border-rose-500" />
            </div>
            <div
              className={cn(
                sectionPadding,
                "pb-0 pt-4 sm:pb-0 sm:pt-4 md:pb-0 md:pt-4 lg:pb-0 lg:pt-4 xl:pb-0 xl:pt-4 2xl:pb-0 2xl:pt-4",
                "relative flex flex-row justify-between gap-8",
              )}
            >
              <Link
                href={prevItemLink ?? ""}
                className={cn(
                  "group flex flex-1 flex-col items-start gap-2 p-2",
                  {
                    "cursor-default": !prevItemLink,
                  },
                )}
                onClick={createLocalLinkClickHandler(prevItemLink)}
              >
                <span
                  aria-hidden
                  className={cn(
                    "text-3xl font-medium leading-tight text-blue-500 dark:text-rose-500",
                    {
                      "text-gray-500": !prevItemLink,
                    },
                  )}
                >
                  &lt;-
                </span>
                <span className="sr-only">View</span>
                {prevItemTitle ?? `No previous ${elementType}`}
              </Link>
              <Link
                href={prevItemLink ?? ""}
                className={cn(
                  "group flex flex-1 flex-col items-end gap-2 p-2",
                  {
                    "cursor-default": !nextItemLink,
                  },
                )}
                onClick={createLocalLinkClickHandler(nextItemLink)}
              >
                <span
                  aria-hidden
                  className={cn(
                    "text-3xl font-medium leading-tight text-blue-500 dark:text-rose-500",
                    {
                      "text-gray-500": !nextItemLink,
                    },
                  )}
                >
                  -&gt;
                </span>
                <span className="sr-only">View</span>
                {nextItemTitle ?? `No next ${elementType}`}
              </Link>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
