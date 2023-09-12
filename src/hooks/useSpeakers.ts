"use client"

import { getDeploymentUrl } from "@/utils/get-deployment-url"
import useSWR from "swr"
import { getSpeakers } from "../../sanity/lib/client"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSWR("speakers", getSpeakers)

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `https://${getDeploymentUrl()}/?viewSpeaker=${speaker.slug?.current}#speakers`
