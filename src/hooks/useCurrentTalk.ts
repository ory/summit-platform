import { useCurrentDate } from "@/hooks/useCurrentDate"
import { useTalks } from "@/hooks/useTalks"

export const useCurrentTalk = () => {
  const talks = useTalks()
  const now = useCurrentDate()

  return talks.findLast(
    ({ startTime }) => new Date(startTime).getTime() <= now.getTime(),
  )
}
