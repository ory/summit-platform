import {
  RegistrationResponse,
  RegistrationResponseType,
} from "@/app/api/registration/registration-responses"
import { getRegistrationData } from "@/app/hubspot/api"
import {
  getIdentityById,
  getSingleVerifiedEmailAddress,
} from "@/app/ory/getIdentity"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  // Gets Ory Network identity by ID
  // (considered enough of a secret for this purpose, as opposed to email)
  // then gets verified email address from identity and uses that to query hubspot.
  const { searchParams } = new URL(request.url)
  const identityId = searchParams.get("identityId")

  const identity = await getIdentityById(identityId)
  if (!identity) {
    return NextResponse.json({
      type: RegistrationResponseType.IDENTITY_NOT_FOUND,
    } satisfies RegistrationResponse)
  }

  const verifiedEmailAddress = getSingleVerifiedEmailAddress(identity)
  if (!verifiedEmailAddress) {
    return NextResponse.json({
      type: RegistrationResponseType.EMAIL_NOT_VERIFIED,
    } satisfies RegistrationResponse)
  }

  const internalRegistrationData = await getRegistrationData(
    verifiedEmailAddress,
  )
  if (!internalRegistrationData) {
    return NextResponse.json({
      type: RegistrationResponseType.NOT_REGISTERED,
    } satisfies RegistrationResponse)
  }

  const { hubspotContactId, ...userFacingRegistrationData } =
    internalRegistrationData

  return NextResponse.json(
    {
      type: RegistrationResponseType.REGISTERED,
      registrationData: userFacingRegistrationData,
    } satisfies RegistrationResponse,
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400",
      },
    },
  )
}
