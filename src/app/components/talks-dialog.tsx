import { SanityImage } from "@/app/components/SanityImage"
import { dividerStyles } from "@/app/components/dividerStyles"
import { cn } from "@/utils/cn"
import { Dialog } from "@headlessui/react"
import { SanityImageSource } from "@sanity/asset-utils"
import { useRef } from "react"
import ReactMarkdown from "react-markdown"
import { Talk } from "../../../sanity/lib/client"
import { Speaker } from "../../../sanity.config"

type PropTypes = {
  onClose: () => void
  talks?: Talk[]
  prevItemDisabled: boolean
  nextItemDisabled: boolean
  onSelectPrevItem: () => void
  onSelectNextItem: () => void
}

const sectionLayout =
  "grid grid-cols-1 gap-4 lg:grid-cols-[272px,1fr] lg:items-start"
const sectionPadding = "px-4 py-6 sm:px-16 sm:py-12"
const customProse = "prose dark:text-white"

export const TalksDialog = ({
  talks,
  onClose,
  prevItemDisabled,
  nextItemDisabled,
  onSelectPrevItem,
  onSelectNextItem,
}: PropTypes) => {
  const speakersMap =
    talks?.reduce(
      (allSpeakers, talk) => ({
        ...allSpeakers,
        ...talk.speakers.reduce(
          (talkSpeakers, curr) => ({
            ...talkSpeakers,
            [curr._id]: curr,
          }),
          {} as Record<string, Speaker>,
        ),
      }),
      {} as Record<string, Speaker>,
    ) ?? {}
  const speakers: Speaker[] = Object.values(speakersMap)
  const dialogRef = useRef<HTMLDivElement>(null)

  const withScrollReset = (fn: () => void) => () => {
    dialogRef.current?.scrollTo({
      top: 0,
    })
    fn()
  }

  return (
    <Dialog open={(talks?.length ?? 0) > 0} onClose={onClose}>
      <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex w-screen flex-col items-center justify-center px-6 py-16 sm:px-12 md:py-24 lg:px-24">
        <Dialog.Panel
          ref={dialogRef}
          className="relative flex w-full max-w-[--ory-max-content-width] flex-grow flex-col overflow-auto bg-white py-4 dark:bg-indigo-950 sm:py-6"
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
            Details about the talks
            <ul>
              {talks?.map((talk) => {
                const speakerNames = talk.speakers.map(
                  (speaker) => speaker.name,
                )
                const firstSpeakers = speakerNames.slice(0, -1)
                const lastSpeaker = speakerNames.at(-1)
                const speakersList = [
                  firstSpeakers.join(", "),
                  lastSpeaker,
                ].join(" and ")
                return (
                  <li key={talk._id}>
                    &quot;{talk.title}&quot; by {speakersList}
                  </li>
                )
              })}
            </ul>
          </Dialog.Title>
          {talks?.map((talk) => {
            const start = new Date(talk.startTime)
            return (
              <article key={talk._id} className="flex flex-col">
                <section
                  className={cn(dividerStyles, sectionLayout, sectionPadding)}
                >
                  <div>
                    <time
                      dateTime={talk.startTime}
                      className="inline-block border border-blue-500 bg-rose-50 p-1 text-xl font-bold leading-normal dark:border-rose-500 dark:bg-indigo-900"
                    >
                      {start.getHours().toString().padStart(2, "0")}:
                      {start.getMinutes().toString().padStart(2, "0")}
                    </time>
                  </div>
                  <div className="flex flex-col gap-8">
                    <h3 className="text-5xl font-bold leading-normal">
                      {talk.title}
                    </h3>
                    <address>
                      <ul className="flex flex-col gap-2">
                        {talk.speakers.map((speaker) => (
                          <li
                            key={speaker._id}
                            className="flex items-center gap-4"
                          >
                            <SanityImage
                              imageSource={
                                speaker.profilePicture as SanityImageSource
                              }
                              sizes="(min-width: 1px) 24px"
                              alt={`Profile picture of ${speaker.name}`}
                              className="aspect-square w-6 rounded-full border border-gray-900 object-cover dark:border-white"
                            />
                            {speaker.name}, {speaker.position}
                          </li>
                        ))}
                      </ul>
                    </address>
                  </div>
                </section>
                <section
                  className={cn(dividerStyles, sectionLayout, sectionPadding)}
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold uppercase leading-tight text-blue-500 dark:text-rose-500">
                      Session details
                    </h3>
                    <ul className="flex">Socials</ul>
                  </div>
                  <div className={customProse}>
                    <ReactMarkdown>{talk.summary}</ReactMarkdown>
                  </div>
                </section>
              </article>
            )
          })}
          {speakers.length > 0 && (
            <ul
              aria-label="Speaker details"
              className={cn(sectionPadding, "flex flex-col gap-12")}
            >
              {speakers.map((speaker) => (
                <li key={speaker._id} className={cn(sectionLayout)}>
                  <div className="flex items-center gap-2">
                    <div className="relative aspect-square w-16 overflow-hidden rounded-full border-2 border-gray-900 dark:border-white">
                      <div className="absolute inset-0 bg-gray-300" />
                      <SanityImage
                        imageSource={
                          speaker.profilePicture as SanityImageSource
                        }
                        sizes="(min-width: 1px) 64px"
                        alt={`Profile picture of ${speaker.name}`}
                        className="absolute inset-0 bg-blue-500 object-cover mix-blend-normal"
                      />
                      <div className="absolute inset-0 bg-blue-500 mix-blend-screen dark:bg-rose-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold leading-tight">
                        {speaker.name}
                      </span>
                      <span className="leading-tight">{speaker.position}</span>
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
              "relative flex flex-col justify-between gap-8 sm:flex-row",
            )}
          >
            <button
              className="group flex flex-col gap-2 p-2"
              disabled={prevItemDisabled}
              onClick={withScrollReset(onSelectPrevItem)}
            >
              <span
                aria-hidden
                className="text-3xl font-medium leading-tight text-blue-500 group-disabled:text-gray-500 dark:text-rose-500"
              >
                &lt;-
              </span>
              Previous Agenda Item
            </button>
            <button
              className="group flex flex-col items-end gap-2 p-2"
              disabled={nextItemDisabled}
              onClick={withScrollReset(onSelectNextItem)}
            >
              <span
                aria-hidden
                className="text-3xl font-medium leading-tight text-blue-500 group-disabled:text-gray-500 dark:text-rose-500"
              >
                -&gt;
              </span>
              Next Agenda Item
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
