import { SanityImage } from "@/app/components/SanityImage"
import { dividerStyles } from "@/app/components/dividerStyles"
import { LinkIcon } from "@/assets/icon/link-icon"
import { LinkedinIcon } from "@/assets/icon/linkedin-icon"
import { TwitterIcon } from "@/assets/icon/twitter-icon"
import { getPermalinkFromTalk } from "@/hooks/useTalks"
import { cn } from "@/utils/cn"
import { getReadableSpeakerList } from "@/utils/talk-utils"
import { SanityImageSource } from "@sanity/asset-utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { match } from "ts-pattern"
import { Talk } from "../../../sanity/lib/sanityClient"

const sectionLayout =
  "grid grid-cols-1 gap-4 lg:grid-cols-[272px,1fr] lg:items-start"
const sectionPadding = "px-4 py-6 sm:px-16 sm:py-12"
const customProse = "prose dark:prose-invert"

export const TalkDetails = ({
  talk,
  className,
  asRow = false,
  withoutDividers = false,
  timeClassName,
  withReadMore = false,
  noSectionPadding = false,
}: {
  talk: Talk
  className?: string
  asRow?: boolean
  withoutDividers?: boolean
  timeClassName?: string
  withReadMore?: boolean
  noSectionPadding?: boolean
}) => {
  const path = usePathname()
  const start = new Date(talk.startTime)

  const getShareMessageForMedia = (media?: "twitter") => {
    const speakerList = getReadableSpeakerList(talk, media)
    const authorText = speakerList
      ? ""
      : ` by ${getReadableSpeakerList(talk, media)}`
    return `Check out this talk on "${
      talk.title
    }" that will be held${authorText} at ${match(media)
      .with("twitter", () => "@OryCorp")
      .otherwise(() => "Ory")} Summit 2023
  
  ${getPermalinkFromTalk(talk, path)}`
  }

  const copyToClipboard = (message: string) => {
    navigator.clipboard.writeText(message).catch(console.error)
  }

  return (
    <article className={cn("flex", asRow ? "flex-row" : "flex-col", className)}>
      <section
        className={cn(
          !withoutDividers && dividerStyles,
          asRow ? "flex flex-1 flex-col gap-4" : sectionLayout,
          !noSectionPadding && sectionPadding,
        )}
      >
        <div>
          <time
            dateTime={start.toString()}
            aria-label={start.toString()}
            className={cn(
              "inline-block border border-blue-500 bg-rose-50 p-1 text-xl font-bold leading-normal dark:border-rose-500 dark:bg-indigo-900",
              timeClassName,
            )}
          >
            <span aria-hidden>
              {start.getHours().toString().padStart(2, "0")}:
              {start.getMinutes().toString().padStart(2, "0")}
            </span>
          </time>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold leading-normal">{talk.title}</h3>
          {talk.speakers?.length > 0 && (
            <address>
              <ul className="flex flex-col gap-2" aria-label="Speakers">
                {talk.speakers.map((speaker) => (
                  <li
                    key={speaker._id}
                    className="flex items-center gap-4 not-italic"
                  >
                    <div className="relative aspect-square w-8 shrink-0 overflow-hidden rounded-full border border-gray-900 dark:border-white">
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
                    {speaker.name}, {speaker.position}
                  </li>
                ))}
              </ul>
            </address>
          )}
        </div>
      </section>
      <section
        className={cn(
          !withoutDividers && dividerStyles,
          asRow ? "flex flex-1 flex-col gap-4" : sectionLayout,
          !noSectionPadding && sectionPadding,
        )}
      >
        <div
          className={cn(
            "flex gap-4",
            asRow ? "flex-row items-center justify-end" : "flex-col",
          )}
        >
          <h3 className="font-bold uppercase leading-tight text-blue-500 dark:text-rose-500">
            Share this session
          </h3>
          <ul className="flex gap-2">
            <li>
              <Link
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                  getShareMessageForMedia("twitter"),
                )}`}
                target="_blank"
              >
                <TwitterIcon
                  className="fill-blue-500 dark:fill-rose-500"
                  aria-hidden
                />
                <span className="sr-only">Share on Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  getPermalinkFromTalk(talk, path),
                )}`}
                target="_blank"
              >
                <LinkedinIcon
                  className="fill-blue-500 dark:fill-rose-500"
                  aria-hidden
                />
                <span className="sr-only">Share on LinkedIn</span>
              </Link>
            </li>
            <li>
              <a
                href={getPermalinkFromTalk(talk, path)}
                onClick={(event) => {
                  event.preventDefault()
                  copyToClipboard(getShareMessageForMedia())
                }}
              >
                <LinkIcon
                  className="fill-blue-500 dark:fill-rose-500"
                  aria-hidden
                />
                <span className="sr-only">Copy link to clipboard</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={cn(customProse)}>
          <div
            className={cn({
              "line-clamp-5 text-ellipsis": withReadMore,
            })}
          >
            <ReactMarkdown>{talk.summary}</ReactMarkdown>
          </div>
          {withReadMore && (
            <Link
              href={getPermalinkFromTalk(talk, path)}
              className="text-blue-500 no-underline dark:text-rose-500"
            >
              Read more
            </Link>
          )}
        </div>
      </section>
    </article>
  )
}
