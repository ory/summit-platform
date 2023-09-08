import { createClient } from "@sanity-typed/client"
import { apiVersion, dataset, projectId, useCdn } from "../env"
import { SanityValues, Speaker, Talk } from "../../sanity.config"

export const client = createClient<SanityValues>()({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  withCredentials: true,
})

export const getSpeakers = async () => client.fetch(`*[_type == "speaker"]`)
export const getTalks = async (): Promise<
  (Omit<Talk, "speakers"> & { speakers: Speaker[] })[]
> =>
  (client.fetch as any)(`*[_type == "talk"] {
  ...,
  speakers[] ->,
}`)
