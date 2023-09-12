"use client"

import { getDeploymentOrigin } from "@/utils/get-deployment-origin"
import useSWR from "swr"
import { getSpeakers } from "../../sanity/lib/client"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSWR("speakers", getSpeakers)

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `${getDeploymentOrigin()}/?viewSpeaker=${speaker.slug?.current}#speakers`
