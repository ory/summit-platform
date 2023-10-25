import { useTalks } from "@/hooks/useTalks"
import { useEffect, useState } from "react"

export const useCurrentTalk = () => {
  const talks = useTalks()

  const [now, setNow] = useState(new Date().getTime())
  useEffect(() => {
    const request = requestAnimationFrame(() => {
      setNow(new Date().getTime())
    })

    return () => cancelAnimationFrame(request)
  })

  return talks.findLast(({ startTime }) => new Date(startTime).getTime() <= now)
}
