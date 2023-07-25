import { getCurrentProjectId } from '@/app/ory/getCurrentProjectId'
import useSWR from 'swr'
import { useSession } from './useSession'

export const useCurrentProjectId = () => {
  const { data: session } = useSession()
  return useSWR(session?.active ? `current-project-${session.id}` : null, getCurrentProjectId)
}
