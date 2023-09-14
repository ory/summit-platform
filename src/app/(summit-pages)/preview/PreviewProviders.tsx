"use client"

import { Providers } from "@/app/(summit-pages)/providers"
import { PropsWithChildren } from "react"
import { collate, SanityDocumentLike } from "sanity"
import useSWR from "swr"
import {
  getSpeakers,
  getTalks,
  sanityClient,
} from "../../../../sanity/lib/sanityClient"

// Copied from
// https://github.com/sanity-io/sanity/blob/f4b66a8695b30d387a2de97d3737252616854a54/packages/%40sanity/desk-tool/src/panes/documentsListPane/DocumentsListPane.js#L24
function removePublishedWithDrafts<T extends SanityDocumentLike>(
  documents: T[],
): T[] {
  return collate(documents).map((entry) => {
    const doc: T = entry.draft || entry.published!
    return {
      ...doc,
      hasPublished: !!entry.published,
      hasDraft: !!entry.draft,
    }
  })
}

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
    <Providers
      speakers={removePublishedWithDrafts(speakers ?? [])}
      talks={removePublishedWithDrafts(talks ?? [])}
    >
      {children}
    </Providers>
  )
}
