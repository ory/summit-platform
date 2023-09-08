"use client"

import useSWR from "swr"
import { getTalks } from "../../sanity/lib/client"


export const useTalks = () => useSWR("talks", getTalks)