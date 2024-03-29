"use client"

import { useSanityContext } from "@/contexts/sanity-context"
import { getDeploymentBaseUrl } from "@/utils/get-deployment-base-url"
import { Talk } from "../../sanity/lib/sanityClient"
import { Speaker } from "../../sanity.config"

export const useTalks = () => useSanityContext().talks

export const useTalksBySpeakerId = () => {
  const talks = useTalks()
  const res: Record<string, Talk[]> = {}

  for (let talk of talks ?? []) {
    for (let speaker of talk.speakers ?? []) {
      const prev = res[speaker._id] ?? []
      res[speaker._id] = [...prev, talk]
    }
  }

  return res
}

export const getSpeakersFromTalks = (talks: Talk[]) => {
  const speakersMap =
    talks?.reduce(
      (allSpeakers, talk) => ({
        ...allSpeakers,
        ...(talk.speakers ?? []).reduce(
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
  return speakers
}

export const getPermalinkFromTalk = (talk: Talk, path: string) =>
  `${getDeploymentBaseUrl()}${path}?viewSession=${talk.slug.current}#agenda`
