"use client"

import { getSession } from "@/app/ory/getSession"
import useSWR from "swr"

export const useSession = () => useSWR("session", getSession)
