import { getSubscription } from '@/app/ory/getSubscriptionPlan'
import useSWR from 'swr'
import { useNormalizedProject } from './useNormalizedProject'
import { getPlanFromSubscription } from '@/app/ory/SubscriptionPlan'

export const useSubscription = () => {
  const { data: normalizedProject } = useNormalizedProject()
  const subscriptionId = normalizedProject?.subscription_id

  return useSWR(subscriptionId ? `subscription-${subscriptionId}` : null, () => {
    if (!subscriptionId) {
      throw new Error('This should not be possible due to uswSWR configuration')
    }

    return getSubscription(subscriptionId)
  })
}

export const useSubscriptionPlan = () => {
  const { data: subscription, ...rest } = useSubscription()

  return {
    data: getPlanFromSubscription(subscription).plan,
    ...rest
  }
}
