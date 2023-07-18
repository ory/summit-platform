"use client"

import { getSession } from "@/app/ory/getSession"
import useSWR from "swr"

export const useSession = () => useSWR("session", getSession, {
  onErrorRetry: (error) => {
    // Never retry on 401 (not logged in) as it won't change without
    // losing focus / redirecting and the revalidate will happen then anyway
    if (error.code === 401) {
      return
    }
  }
})
