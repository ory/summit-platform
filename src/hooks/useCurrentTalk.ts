import { useCurrentDate } from "@/hooks/useCurrentDate"
import { useTalks } from "@/hooks/useTalks"
import { useMemo } from "react"

export const useCurrentTalk = () => {
  const talks = useTalks()
  const sortedTalks = useMemo(
    () =>
      talks.sort((a, b) => {
        let aDate = new Date(a.startTime).valueOf()
        let bDate = new Date(b.startTime).valueOf()
        return aDate - bDate
      }),
    [talks],
  )
  const now = useCurrentDate()

  return (
    sortedTalks.findLast(
      ({ startTime }) => new Date(startTime).getTime() <= now.getTime(),
    ) ?? sortedTalks[0]
  )
}
