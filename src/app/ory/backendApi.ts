import { Configuration, IdentityApi } from "@ory/client"
// server-only because of Ory API key
import "server-only"

export const identityApi = new IdentityApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_PROJECTS_URL,
    accessToken: process.env.CONFIDENTIAL_ORY_API_KEY,
  }),
)
