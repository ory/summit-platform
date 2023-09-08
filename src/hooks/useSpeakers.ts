"use client"

import useSWR from "swr"
import { getSpeakers } from "../../sanity/lib/client"

export const useSpeakers = () => useSWR("speakers", getSpeakers)
