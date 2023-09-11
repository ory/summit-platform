import { getPermalinkFromSpeaker } from "@/hooks/useSpeakers"
import { useNextSanityImage } from "next-sanity-image"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import { client } from "../../../sanity/lib/client"
import { Speaker } from "../../../sanity.config"

export const SpeakerCard = (speaker: Speaker) => {
  const { name, position, profilePicture } = speaker
  const router = useRouter()
  const profileImageProps = useNextSanityImage(client, profilePicture)
  const onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    router.push(getPermalinkFromSpeaker(speaker), {
      scroll: false,
    })
  }

  return (
    <li className="h-[531px] w-[calc((100cqw-16px*(var(--num-of-cards)-1))/var(--num-of-cards))] shrink-0 snap-start [--num-of-cards:1] last:mr-[--total-padding] sm:[--num-of-cards:2] xl:[--num-of-cards:3]">
      <Link
        href={getPermalinkFromSpeaker(speaker)}
        onClick={onClick}
        className="flex h-full w-full flex-col justify-between border border-transparent bg-gray-100 p-8 text-start hover:border-blue-500 hover:bg-gray-50 dark:bg-indigo-900 dark:hover:border-rose-500 dark:hover:bg-indigo-950"
      >
        <div className="relative aspect-square w-[272px] self-center overflow-hidden rounded-full border-2 border-gray-900 dark:border-white">
          <div className="absolute inset-0 bg-gray-300" />
          <Image
            {...profileImageProps}
            alt={`Profile picture of ${name}`}
            sizes="(min-width: 1px) 272px"
            className="absolute inset-0 h-full w-full bg-blue-500 object-cover mix-blend-normal"
          />
          <div className="absolute inset-0 bg-blue-500 mix-blend-screen dark:bg-rose-500" />
        </div>
        <div className="h-[114px]">
          <p className="flex flex-col gap-2 leading-normal">
            <span className="text-2xl font-bold">{name}</span>
            <span className="text=xl">{position}</span>
          </p>
        </div>
        <span className="sr-only">
          Click to view details about {name} and their talks
        </span>
      </Link>
    </li>
  )
}
