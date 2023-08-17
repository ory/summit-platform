"use client"

import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { match } from "ts-pattern"
import testPortrait from "../../assets/test-portrait.jpg"

const speakers = [
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
]

export const Speakers = () => {
  const speakersContainerRef = useRef<HTMLUListElement>(null)
  const useScroller = (direction: "left" | "right") =>
    useCallback(() => {
      const speakersContainer = speakersContainerRef.current
      if (!speakersContainer) {
        throw new Error(
          "No Speakers container found. This should not be possible",
        )
      }

      const children = Array.from(speakersContainer.children) as HTMLElement[]
      const target = match(direction)
        .with("left", () =>
          children
            // Reverse to search from right to left
            .findLast((el) => el.offsetLeft < speakersContainer.scrollLeft),
        )
        .with("right", () =>
          children.find((el) => el.offsetLeft > speakersContainer.scrollLeft),
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
    <Container className="max-w-[--ory-max-content-width]">
      <Wrapper>
        <Content className="col-span-full">
          <div className="flex flex-col gap-2">
            <Overline href="#speakers">speakers</Overline>
            <h2 className="text-3xl font-medium uppercase leading-tight">
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
          "[--total-padding:calc(var(--ory-container-padding)+var(--ory-global-padding))]",
          "w-[calc(100vw-var(--total-padding))]",
          "relative col-span-full flex snap-x snap-mandatory gap-4 overflow-auto",
        )}
      >
        {speakers.map((speaker, index) => (
          <li
            key={index}
            className="flex h-[531px] w-[312px] snap-start flex-col justify-between bg-gray-100 p-8 last:mr-[--total-padding] dark:bg-indigo-900"
          >
            <div className="relative aspect-square w-[272px] self-center overflow-hidden rounded-full border-2 border-gray-900">
              <div className="absolute inset-0 bg-gray-300" />
              <Image
                src={testPortrait}
                alt={`Profile picture of ${speaker.name}`}
                className="absolute inset-0 bg-blue-500 object-cover mix-blend-normal"
              />
              <div className="absolute inset-0 bg-blue-500 mix-blend-screen dark:bg-rose-500" />
            </div>
            <div className="h-[114px]">
              <p className="flex flex-col gap-2 leading-normal">
                <span className="text-2xl font-bold">{speaker.name}</span>
                <span className="text=xl">{speaker.position}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
