"use client"

import useSWR from "swr"
import { getSpeakers } from "../../sanity/lib/client"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSWR("speakers", getSpeakers)

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `https://${
    window?.location?.host ??
    process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL
  }/?viewSpeaker=${speaker.slug?.current}#speakers`
