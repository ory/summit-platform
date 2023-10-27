"use client"

import { CurrentTalk } from "@/app/(summit-pages)/live/current-talk"
import { Container } from "@/app/components/container"
import { useIsLive } from "@/hooks/useIsLive"
import { useLoginUrl } from "@/hooks/useLoginUrl"
import { useSession } from "@/hooks/useSession"
import { cn } from "@/utils/cn"
import { redirect } from "next/navigation"

export const LivestreamHero = () => {
  const { data: session, isLoading: sessionIsLoading } = useSession()
  const loginUrl = useLoginUrl()
  const isLive = useIsLive()

  if (!isLive) {
    redirect("/")
  }

  if (!sessionIsLoading && !session?.active) {
    redirect(loginUrl)
  }

  return (
    <Container className="flex min-h-full w-full max-w-[--ory-max-content-width] flex-1 flex-col gap-y-0 lg:gap-y-0">
      <iframe
        className={cn("aspect-video")}
        src={`https://www.youtube-nocookie.com/embed/${process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID}`}
        title="Watch the Ory Summit live"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CurrentTalk className="py-8" />
    </Container>
  )
}
