import { summitStartingDate } from "@/app/(summit-pages)/startingDate"
import { useCurrentDate } from "@/hooks/useCurrentDate"

const dayOfSummit = new Date(summitStartingDate).toDateString()
export const useIsLive = () => useCurrentDate().toDateString() === dayOfSummit
