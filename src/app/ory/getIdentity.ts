import { identityApi } from "@/app/ory/api"
import { Identity } from "@ory/client"

export const getIdentityById = async (
  id?: string | null,
): Promise<Identity | undefined> => {
  if (id === undefined || id === null) {
    return undefined
  }

  try {
    return (
      await identityApi.getIdentity({
        id,
      })
    ).data
  } catch (e) {
    return undefined
  }
}

export const getSingleVerifiedEmailAddress = (
  identity: Identity,
): string | undefined => {
  const verifiedAddresses = identity.verifiable_addresses
  return verifiedAddresses?.length === 1 && verifiedAddresses[0].verified
    ? verifiedAddresses[0].value
    : undefined
}
