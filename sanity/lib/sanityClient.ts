import { createClient } from "@sanity-typed/client"
import { apiVersion, dataset, projectId, useCdn, withCredentials } from "../env"
import { SanityValues, Speaker } from "../../sanity.config"

export const sanityClient = createClient<SanityValues>()({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  withCredentials,
})

export const getSpeakers = async (client = sanityClient) =>
  client.fetch(`*[_type == "speaker"]`)
export type Talk = Omit<SanityValues["talk"], "speakers"> & {
  speakers: Speaker[]
}
export const getTalks = async (client = sanityClient): Promise<Talk[]> =>
  (client.fetch as any)(`*[_type == "talk"] {
  ...,
  speakers[] ->,
}`)
