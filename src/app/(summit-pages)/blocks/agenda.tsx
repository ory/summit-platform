"use client"

import { SanityImage } from "@/app/components/SanityImage"
import { ArrowButton } from "@/app/components/arrow-button"
import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import { useTalks } from "@/hooks/useTalks"
import { SanityImageSource } from "@sanity/asset-utils"

export const Agenda = () => {
  const { data: talks } = useTalks()

  return (
    <Container className="w-full max-w-[--ory-max-content-width] gap-y-16 @container md:gap-y-24">
      <Wrapper>
        <Content className="col-span-full flex flex-col gap-2">
          <Overline href="#agenda">agenda</Overline>
          <h2 className="text-3xl font-medium uppercase leading-tight md:text-4xl">
            The talks
          </h2>
          {/* TODO: change URL */}
          <ArrowButton href="https://google.com">download PDF</ArrowButton>
        </Content>
      </Wrapper>
      <ul className="col-span-full">
        {talks?.map((talk) => {
          const start = new Date(talk.startTime)

          return (
            <li
              key={talk._id}
              className="group cursor-pointer border-b border-solid border-blue-500 px-2 py-8 first:border-t hover:bg-gray-50 dark:border-rose-500 dark:hover:bg-indigo-950"
            >
              <article className="grid grid-cols-[max-content,1fr] gap-x-8 gap-y-4">
                <time
                  dateTime={talk.startTime}
                  className="self-start border border-blue-500 bg-rose-50 p-1 dark:border-rose-500 dark:bg-transparent"
                >
                  {start.getHours().toString().padStart(2, "0")}:
                  {start.getMinutes().toString().padStart(2, "0")}
                </time>
                <h3 className="self-center leading-tight">{talk.title}</h3>
                <address className="col-start-2">
                  <ul className="flex flex-col gap-1">
                    {talk.speakers.map((speaker) => (
                      <li key={speaker._id} className="flex items-center gap-4">
                        <SanityImage
                          imageSource={
                            speaker.profilePicture as SanityImageSource
                          }
                          sizes="(min-width: 1px) 24px"
                          alt={`Profile picture of ${speaker.name}`}
                          className="aspect-square w-6 rounded-full border border-gray-900 object-cover dark:border-white"
                        />
                        {speaker.name}
                      </li>
                    ))}
                  </ul>
                </address>
              </article>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
