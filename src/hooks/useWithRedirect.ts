import { usePathname } from 'next/navigation'
import { useComputeInClient } from './useComputeInClient'

export const useWithRedirect = (href: string, redirectUrlKey = 'return_to') => {
  const path = usePathname()
  const currentUrl = useComputeInClient(() => window?.location?.href, "", [
    path,
  ])

  try {
    const url = new URL(href)
    url.searchParams.set(redirectUrlKey, currentUrl)

    return url.toString()
  } catch (e) {
    console.error(e)
    return href
  }
}
