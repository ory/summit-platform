import { getNormalizedProject } from '@/app/ory/getNormalizedProject'
import useSWR from 'swr'
import { useCurrentProjectId } from './useCurrentProjectId'

export const useNormalizedProject = () => {
  const { data: currentProjectId } = useCurrentProjectId()

  return useSWR(currentProjectId ? `normalized-project-${currentProjectId}` : null, () => {
    if (!currentProjectId) {
      throw new Error('This should not be possible due to uswSWR configuration')
    }

    return getNormalizedProject(currentProjectId)
  })
}
