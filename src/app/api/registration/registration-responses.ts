import { RegistrationData } from "@/app/hubspot/api"

export enum RegistrationResponseType {
  IDENTITY_NOT_FOUND,
  EMAIL_NOT_VERIFIED,
  NOT_REGISTERED,
  REGISTERED,
}

export type RegistrationResponse = {
  type: RegistrationResponseType
  registrationData?: Omit<RegistrationData, "hubspotContactId">
}
