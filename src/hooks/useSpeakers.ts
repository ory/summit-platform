"use client"

import { useSanityContext } from "@/contexts/sanity-context"
import { getDeploymentBaseUrl } from "@/utils/get-deployment-base-url"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSanityContext().speakers

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `${getDeploymentBaseUrl()}/?viewSpeaker=${speaker.slug?.current}#speakers`
