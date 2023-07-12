import { getRegistrationData } from "@/app/hubspot/api"
import { notFound } from "next/navigation"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email")

  if (!email) {
    notFound()
  }

  const internalRegistrationData = await getRegistrationData(email)

  if (!internalRegistrationData) {
    notFound()
  }

  const { hubspotContactId, ...userFacingRegistrationData } =
    internalRegistrationData

  return NextResponse.json(userFacingRegistrationData, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400'
    }
  })
}
