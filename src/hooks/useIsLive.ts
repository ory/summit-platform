import { useCurrentTalk } from "@/hooks/useCurrentTalk"

export const useIsLive = () => Boolean(useCurrentTalk())
