"use client"

import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { SpeakerCard } from "@/app/components/speaker-card"
import { TalksDialog } from "@/app/components/talks-dialog"
import { Wrapper } from "@/app/components/wrapper"
import { useSpeakers } from "@/hooks/useSpeakers"
import { useTalksBySpeakerId } from "@/hooks/useTalks"
import { cn } from "@/utils/cn"
import { useCallback, useEffect, useRef, useState } from "react"
import { match } from "ts-pattern"

export const Speakers = () => {
  const speakersContainerRef = useRef<HTMLUListElement>(null)
  const { data: speakers } = useSpeakers()
  const talksBySpeakerId = useTalksBySpeakerId()

  const [selectedSpeakerIndex, setSelectedSpeakerIndex] = useState<number>()
  const selectedSpeaker = speakers?.[selectedSpeakerIndex ?? -1]
  const selectedTalks =
    selectedSpeakerIndex !== undefined
      ? talksBySpeakerId[selectedSpeaker?._id ?? ""]
      : undefined

  const selectedSpeakerIndexOrNan = selectedSpeakerIndex ?? NaN
  const prevSpeakerName = speakers?.[selectedSpeakerIndexOrNan - 1]?.name
  const nextSpeakerName = speakers?.[selectedSpeakerIndexOrNan + 1]?.name

  const useScroller = (direction: "left" | "right") =>
    useCallback(() => {
      const speakersContainer = speakersContainerRef.current
      if (!speakersContainer) {
        throw new Error(
          "No Speakers container found. This should not be possible",
        )
      }

      const children = Array.from(speakersContainer.children) as HTMLElement[]
      const leftPadding = children.at(1)?.offsetLeft ?? NaN
      const currScrollOffset = speakersContainer.scrollLeft + leftPadding
      const target = match(direction)
        .with("left", () =>
          children
            // Reverse to search from right to left
            .findLast((el) => el.offsetLeft < currScrollOffset),
        )
        .with("right", () =>
          children.find((el) => el.offsetLeft > currScrollOffset),
        )
        .exhaustive()

      if (target) {
        speakersContainer.scrollTo({
          left: target.offsetLeft,
          behavior: "smooth",
        })
      }
    }, [direction])

  const scrollLeft = useScroller("left")
  const scrollRight = useScroller("right")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const speakersContainer = speakersContainerRef.current
    if (!speakersContainer) {
      return
    }

    const rightmostChild = speakersContainer.lastChild as HTMLElement
    const handler = () => {
      setCanScrollLeft(speakersContainer.scrollLeft > 0)
      setCanScrollRight(
        speakersContainer.scrollLeft + speakersContainer.offsetWidth <
          rightmostChild.offsetLeft + rightmostChild.offsetWidth,
      )
    }

    speakersContainer.addEventListener("scroll", handler)
    return () => speakersContainer.removeEventListener("scroll", handler)
    // eslint-disable-next-line
  }, [speakersContainerRef.current])

  return (
    <Container className="w-full max-w-[--ory-max-content-width] gap-y-24 @container">
      <Wrapper>
        <Content className="col-span-full sm:flex-row sm:items-end sm:gap-16">
          <div className="flex flex-grow flex-col gap-2">
            <Overline href="#speakers">speakers</Overline>
            <h2 className="text-3xl font-medium uppercase leading-tight md:text-4xl md:leading-tight">
              The lineup 2023
            </h2>
          </div>
          <div className="flex gap-4 text-3xl font-medium leading-tight text-blue-500 dark:text-rose-500">
            <button
              className="disabled:text-blue-300 dark:disabled:text-rose-800"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="View previous speaker"
            >
              <span aria-hidden>&lt;-</span>
            </button>
            <button
              className="disabled:text-blue-300 dark:disabled:text-rose-800"
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="View next speaker"
            >
              <span aria-hidden>-&gt;</span>
            </button>
          </div>
        </Content>
      </Wrapper>
      <ul
        ref={speakersContainerRef}
        className={cn(
          // width should overrule right padding -> subtract it manually from screen width
          "[--total-padding:calc(max(var(--ory-container-padding)+var(--ory-global-padding),(100vw-var(--ory-max-content-width))/2))]",
          "-ml-[--total-padding] [scroll-padding-inline:--total-padding]",
          "w-[calc(100%+2*var(--total-padding))]",
          "relative col-span-full flex snap-x snap-mandatory gap-4 overflow-auto scrollbar-none",
        )}
      >
        {/*/!* effectively adds left padding back, accounting for flex gap *!/*/}
        <li className="w-[calc(var(--total-padding)-1rem)] shrink-0 grow-0 snap-start" />
        {speakers?.map((speaker, index) => (
          // Will hopefully be fixed by https://github.com/saiichihashimoto/sanity-typed/issues/242
          // @ts-ignore
          <SpeakerCard
            key={speaker._id}
            onClick={() => setSelectedSpeakerIndex(index)}
            {...speaker}
          />
        ))}
        {/* effectively adds right padding back, accounting for flex gap */}
        <li className="w-[calc(var(--total-padding)-1rem)] shrink-0 grow-0 snap-start" />
      </ul>
      <TalksDialog
        talks={selectedTalks}
        selectedSpeaker={selectedSpeaker}
        onClose={() => setSelectedSpeakerIndex(undefined)}
        prevItemTitle={prevSpeakerName}
        nextItemTitle={nextSpeakerName}
        onSelectPrevItem={() =>
          setSelectedSpeakerIndex(selectedSpeakerIndex! - 1)
        }
        onSelectNextItem={() =>
          setSelectedSpeakerIndex(selectedSpeakerIndex! + 1)
        }
      />
    </Container>
  )
}
