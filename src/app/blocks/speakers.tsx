"use client"

import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import { cn } from "@/utils/cn"
import { useCallback, useRef } from "react"
import { match } from "ts-pattern"

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
  const speakersContainerRef = useRef<HTMLDivElement>(null)
  const useScroller = (direction: "left" | "right") =>
    useCallback(() => {
      const speakersContainer = speakersContainerRef.current
      if (!speakersContainer) {
        throw new Error(
          "No Speakers container found. This should not be possible",
        )
      }

      const children = Array.from(
        speakersContainer.children,
      ) as HTMLDivElement[]
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
          <div className="flex gap-4 text-3xl font-medium leading-tight text-blue-500">
            <button className="disabled:text-blue-300" onClick={scrollLeft}>
              &lt;-
            </button>
            <button className="disabled:text-blue-300" onClick={scrollRight}>
              -&gt;
            </button>
          </div>
        </Content>
      </Wrapper>
      <div
        ref={speakersContainerRef}
        className={cn(
          // width should overrule right padding -> subtract it manually from screen width
          "[--total-padding:calc(var(--ory-container-padding)+var(--ory-global-padding))]",
          "w-[calc(100vw-var(--total-padding))]",
          "relative col-span-full flex snap-x snap-mandatory gap-4 overflow-auto",
        )}
      >
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex h-[467px] w-[312px] snap-start flex-col justify-between bg-gray-100 p-8 last:mr-[--total-padding]"
          >
            <img
              src=""
              alt=""
              className="aspect-square w-[272px] max-w-none self-center rounded-full border-2 border-gray-900"
            />
            <div className="h-[114px]">
              <p className="flex flex-col gap-2 leading-normal">
                <span className="text-2xl font-bold">{speaker.name}</span>
                <span className="text=xl">{speaker.position}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
