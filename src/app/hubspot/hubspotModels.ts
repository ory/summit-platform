// Types auto-generated from some example responses

export enum SourceType {
  API = "API",
  Calculated = "CALCULATED",
  Form = "FORM",
  AiGroup = "AI_GROUP",
  AutomationPlatform = "AUTOMATION_PLATFORM",
}

export interface Property {
  value: string
  versions?: Array<{
    value: string
    "source-type": SourceType
    "source-id"?: string | null
    "source-label"?: unknown
    "updated-by-user-id"?: null
    /**
     * Unix timestamp in milliseconds
     */
    timestamp: number
    /**
     * @deprecated See https://legacydocs.hubspot.com/docs/methods/contacts/contacts-overview
     */
    selected: boolean
  }>
}

export interface AssociatedCompany {
  "company-id": number
  "portal-id": number
  properties: { [key: string]: Property }
}

export interface FormSubmission {
  "conversion-id": string
  timestamp: number
  "form-id": string
  "portal-id": number
  "page-url": string
  title: string
  "form-type"?: string
  "contact-associated-by"?: string[]
  /**
   * @deprecated See https://legacydocs.hubspot.com/docs/methods/contacts/contacts-overview
   */
  "meta-data"?: unknown[]
  "canonical-url"?: string
  "page-title"?: string
}

export interface Identity {
  type: string
  value: string
  timestamp: number
  "is-primary"?: boolean
}

export interface IdentityProfile {
  vid: number
  "saved-at-timestamp": number
  /**
   * @deprecated See https://legacydocs.hubspot.com/docs/methods/contacts/contacts-overview
   */
  "deleted-changed-timestamp": number
  identities: Identity[]
}

export interface ListMembership {
  "static-list-id": number
  "internal-list-id": number
  timestamp: number
  vid: number
  "is-member": boolean
}

export type Properties = Record<string, Property>

export interface MergeAudit {}

export interface HubspotLegacyProfile {
  vid: number
  "canonical-vid": number
  "merged-vids": any[]
  "portal-id": number
  "is-contact": boolean
  properties: Properties
  "form-submissions": FormSubmission[]
  "list-memberships": ListMembership[]
  "identity-profiles": IdentityProfile[]
  "merge-audits"?: MergeAudit[]
  "associated-company": AssociatedCompany
}
