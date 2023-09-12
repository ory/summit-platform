"use client"

import { Providers } from "@/app/(summit-pages)/providers"
import { PropsWithChildren } from "react"
import useSWR from "swr"
import {
  getSpeakers,
  getTalks,
  sanityClient,
} from "../../../../sanity/lib/sanityClient"

const previewClient = sanityClient.withConfig({
  useCdn: false,
  withCredentials: true,
}) as typeof sanityClient

export const PreviewProviders = ({ children }: PropsWithChildren) => {
  const { data: talks } = useSWR("sanity-preview-talks", () =>
    getTalks(previewClient),
  )
  const { data: speakers } = useSWR("sanity-preview-speakers", () =>
    getSpeakers(previewClient),
  )

  return (
    <Providers speakers={speakers ?? []} talks={talks ?? []}>
      {children}
    </Providers>
  )
}
