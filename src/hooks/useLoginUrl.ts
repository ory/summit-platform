import { useIsLive } from "@/hooks/useIsLive"
import { useComputeInClient } from "./useComputeInClient"
import { useWithRedirect } from "./useWithRedirect"

export const useLoginUrl = () => {
  const isLive = useIsLive()
  const targetUrl = useComputeInClient(
    () => `https://${window.location.host}/${isLive ? "live" : "register"}`,
    undefined,
  )
  return useWithRedirect(
    `${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/login`,
    undefined,
    targetUrl,
  )
}
