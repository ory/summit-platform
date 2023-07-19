import { Subscription } from "@ory/client"

export const getSubscription = async (subscriptionId: string): Promise<Subscription | undefined> => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_ORY_API_URL + "/subscription/" + subscriptionId,
    )
    return await res.json()
  } catch (e) {
    return undefined
  }
}
