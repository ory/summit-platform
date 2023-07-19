import { useComputeInClient } from "./useComputeInClient"
import { useWithRedirect } from "./useWithRedirect"

export const useLoginUrl = () => {
  const targetUrl = useComputeInClient(
    () => `https://${window.location.host}/register`,
    undefined,
  )
  return useWithRedirect(
    `${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/login`,
    "returnTo",
    targetUrl,
  )
}
