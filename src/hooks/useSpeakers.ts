"use client"

import useSWR from "swr"
import { client } from "../../sanity/lib/client"

export const useSpeakers = () =>
  useSWR("speakers", async () =>
    client.fetch(`*[_type == "speaker"] {
  _id,
  name,
  position,
  profilePicture,
}`),
  )
