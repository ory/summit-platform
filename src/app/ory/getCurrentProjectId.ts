import { headers } from "next/headers"
import "server-only"
import { oryProjectApi } from "./api"

export const getCurrentProjectId = async () => {
  try {
    const { data } = await oryProjectApi.getActiveProjectInConsole({
      headers: {
        Cookie: headers().get("Cookie"),
      },
    })
    return data?.project_id
  } catch (e) {
    return undefined
  }
}
