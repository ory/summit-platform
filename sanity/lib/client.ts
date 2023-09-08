import { createClient } from "@sanity-typed/client"
import { apiVersion, dataset, projectId, useCdn } from "../env"
import { SanityValues, Speaker } from "../../sanity.config"

export const client = createClient<SanityValues>()({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  withCredentials: true,
})

export const getSpeakers = async () => client.fetch(`*[_type == "speaker"]`)
export type Talk = Omit<SanityValues["talk"], "speakers"> & {
  speakers: Speaker[]
}
export const getTalks = async (): Promise<Talk[]> =>
  (client.fetch as any)(`*[_type == "talk"] {
  ...,
  speakers[] ->,
}`)
