import { headers } from "next/headers"
import { frontendApi as oryFrontendApi } from "./api"

export const getSession = async () => {
  const cookie = headers().get("cookie")
  try {
    const { data: session } = await oryFrontendApi.toSession({
      cookie: cookie ?? undefined,
    })
    return session.active ? session : undefined
  } catch (e) {
    return undefined
  }
}
