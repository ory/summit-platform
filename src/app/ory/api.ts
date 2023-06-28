import { FrontendApi, Configuration, ProjectApi } from "@ory/client"
import "server-only"

export const frontendApi = new FrontendApi(
  new Configuration({
    basePath: process.env.ORY_PROJECTS_URL,
    baseOptions: {
      withCredentials: true,
    },
  }),
)

export const oryProjectApi = new ProjectApi(
  new Configuration({
    basePath: process.env.ORY_API_URL,
    baseOptions: {
      withCredentials: true,
    },
  }),
)
