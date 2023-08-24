import {
  Configuration,
  FrontendApi,
  IdentityApi,
  ProjectApi,
} from "@ory/client"

export const frontendApi = new FrontendApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_PROJECTS_URL,
    baseOptions: {
      withCredentials: true,
    },
  }),
)

export const identityApi = new IdentityApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_PROJECTS_URL,
    accessToken: process.env.ORY_API_KEY,
  }),
)

export const oryProjectApi = new ProjectApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_API_URL,
    baseOptions: {
      withCredentials: true,
    },
  }),
)
