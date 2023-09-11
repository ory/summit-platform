"use client"

import useSWR from "swr"
import { getSpeakers } from "../../sanity/lib/client"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSWR("speakers", getSpeakers)

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `${location.origin}/?viewSpeaker=${speaker.slug.current}#speakers`
