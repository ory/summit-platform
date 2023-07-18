import { usePathname } from 'next/navigation'
import { useComputeInClient } from './useComputeInClient'
import useSWRImmutable from 'swr/immutable'
import { getLogoutUrl } from '@/app/ory/getLogoutUrl'
import { useSession } from './useSession'

export const useLogoutUrl = () => {
  const path = usePathname()
  const currentUrl = useComputeInClient(() => window?.location?.href, "", [
    path,
  ])
  const { data: session } = useSession()

  return useSWRImmutable(session?.active ? `logout-${currentUrl}-${session.id}` : null, () => getLogoutUrl(currentUrl))
}
