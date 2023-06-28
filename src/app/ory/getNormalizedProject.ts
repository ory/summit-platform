import { NormalizedProject } from "@ory/client"
import { headers } from "next/headers"
import "server-only"
import { getCurrentProjectId } from "./getCurrentProjectId"

export const getNormalizedProject = async (): Promise<
  NormalizedProject | undefined
> => {
  const id = await getCurrentProjectId()
  if (!id) {
    return undefined
  }

  try {
    const Cookie = headers().get("Cookie")
    const requestHeaders = Cookie ? { Cookie } : undefined
    const res = await fetch(
      process.env.ORY_API_URL + "/normalized/projects/" + id,
      {
        headers: requestHeaders,
      },
    )
    const result = await res.json()
    return result
  } catch (e) {
    return undefined
  }
}
