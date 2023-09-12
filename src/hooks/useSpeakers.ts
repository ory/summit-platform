"use client"

import { useSanityContext } from "@/contexts/sanity-context"
import { getDeploymentOrigin } from "@/utils/get-deployment-origin"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSanityContext().speakers

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `${getDeploymentOrigin()}/?viewSpeaker=${speaker.slug?.current}#speakers`
