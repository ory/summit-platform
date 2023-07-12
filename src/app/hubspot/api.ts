import { Client } from "@hubspot/api-client"
import "server-only"
import { HubspotLegacyProfile } from "./hubspotModels"

export const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_API_KEY,
})

const hubspotSummitProperties = [
  "first_time_attendee_",
  "i_m_attending",
  "registering_as",
  "what_information_or_questions_would_you_like_covered_at_this_summit_",
] as const

enum AttencanceLocation {
  IN_PERSON = "in person",
  ONLINE = "online",
}

enum RegistrationType {
  BUSINESS = "a Business",
  INDIVIDUAL = "an Individual",
}

type RegistrationData = {
  hubspotContactId: number
  firstTimeAttendee: boolean
  attendanceLocation: AttencanceLocation
  registeringAs: RegistrationType
  interestedIn?: string
}

const hubspotLegacyProfileToSummitData = (
  profile: HubspotLegacyProfile,
): RegistrationData | undefined => {
  if (hubspotSummitProperties.some((prop) => prop in profile.properties)) {
    const props = profile.properties
    return {
      hubspotContactId: profile.vid,
      firstTimeAttendee: props["first_time_attendee_"]?.value === "Yes",
      attendanceLocation: props["i_m_attending"]?.value as AttencanceLocation,
      registeringAs: props["registering_as"]?.value as RegistrationType,
      interestedIn:
        props[
          "what_information_or_questions_would_you_like_covered_at_this_summit_"
        ]?.value,
    }
  }

  return undefined
}

export const getRegistrationData = async (email: string) => {
  if (!email) {
    return undefined
  }

  const response = await fetch(
    `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?${hubspotSummitProperties
      .map((prop) => `property=${prop}`)
      .join("&")}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      next: {
        // Enable caching only for a single page being built
        revalidate: 1,
      },
    },
  )

  if (!response.ok) {
    return undefined
  }

  const hubspotlegacyProfile: HubspotLegacyProfile = await response.json()
  const registrationData =
    hubspotLegacyProfileToSummitData(hubspotlegacyProfile)
  return registrationData
}

export const getIsRegistered = async (email: string) => {
  return (await getRegistrationData(email)) !== undefined
}
