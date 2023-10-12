"use client"

import { useSanityContext } from "@/contexts/sanity-context"
import { getDeploymentBaseUrl } from "@/utils/get-deployment-base-url"
import { Speaker } from "../../sanity.config"

export const useSpeakers = () => useSanityContext().speakers

// Prepare for lexicographic sorting by generating important -> less important feature string.
// We want to sort by name ASC, so other features must have corresponding sorting
// (i.e. should appear first -> lower value)
const toSortableString = (speaker: Speaker) =>
  `${(1000 - (speaker.priority ?? 500)).toString().padStart(3, "0")}${
    speaker.name
  }`
export const useSortedSpeakers = () =>
  useSpeakers()
    ?.slice()
    .sort((a, b) => toSortableString(a).localeCompare(toSortableString(b)))

export const getPermalinkFromSpeaker = (speaker: Speaker) =>
  `${getDeploymentBaseUrl()}/?viewSpeaker=${speaker.slug?.current}#speakers`
