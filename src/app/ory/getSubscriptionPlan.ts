import { Subscription } from "@ory/client"
import { headers } from "next/headers"
import "server-only"
import { getPlanFromSubscription, Plan } from "./SubscriptionPlan"
import { getNormalizedProject } from "./getNormalizedProject"

const getSubscription = async (): Promise<Subscription | undefined> => {
  const project = await getNormalizedProject()
  const subscriptionId = project?.subscription_id
  if (!subscriptionId) {
    return undefined
  }

  try {
    const Cookie = headers().get("Cookie")
    const requestHeaders = Cookie ? { Cookie } : undefined
    const res = await fetch(
      process.env.ORY_API_URL + "/subscription/" + subscriptionId,
      {
        headers: requestHeaders,
      },
    )
    return await res.json()
  } catch (e) {
    return undefined
  }
}

export const getSubscriptionPlan = async (): Promise<Plan> => {
  const subscription = await getSubscription()
  return getPlanFromSubscription(subscription).plan
}
