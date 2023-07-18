import { usePathname } from 'next/navigation'
import { useComputeInClient } from './useComputeInClient'
import useSWR from 'swr'
import { getLogoutUrl } from '@/app/ory/getLogoutUrl'
import { useSession } from './useSession'

export const useLogoutUrl = () => {
  const path = usePathname()
  const currentUrl = useComputeInClient(() => window?.location?.href, "", [
    path,
  ])
  const { data: session } = useSession()

  return useSWR(`logout-${currentUrl}-${session}`, () => getLogoutUrl(currentUrl))
}
