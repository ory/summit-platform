import { FrontendApi, Configuration, ProjectApi } from "@ory/client"

export const frontendApi = new FrontendApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_PROJECTS_URL,
    baseOptions: {
      withCredentials: true,
    },
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
