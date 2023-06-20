// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0
import { Subscription, SubscriptionCurrentIntervalEnum } from "@ory/client"

export enum Plan {
  Dev = "Dev@0",
  Essentials = "Essentials@2",
  Scale = "Scale@1",
  Enterprise = "enterprise",
}

export const getNextPlanName = (currentPlan?: Plan): string | undefined => {
  switch (currentPlan) {
    case Plan.Dev:
      return "Essentials"
    case Plan.Essentials:
      return "Scale"
    case Plan.Scale:
      return "Enterprise"
    default:
      return undefined
  }
}

export const getPlanFromSubscription = (
  sub: Subscription | undefined,
): { plan: Plan; isAnnualBilling: boolean } => {
  if (!sub) {
    return { plan: Plan.Dev, isAnnualBilling: false }
  }
  return {
    plan:
      sub.current_plan === Plan.Essentials
        ? Plan.Essentials
        : sub.current_plan === Plan.Scale
        ? Plan.Scale
        : Plan.Dev,
    isAnnualBilling:
      sub.current_interval === SubscriptionCurrentIntervalEnum.Yearly,
  }
}
