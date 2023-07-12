import { frontendApi as oryFrontendApi } from "./api"

export const getSession = async () => {
  try {
    const { data: session } = await oryFrontendApi.toSession()
    return session.active ? session : undefined
  } catch (e) {
    return undefined
  }
}
