import { frontendApi as oryFrontendApi } from "./frontendApi"

export const getSession = async () => {
  try {
    const { data: session } = await oryFrontendApi.toSession()
    return session.active ? session : undefined
  } catch (e) {
    return undefined
  }
}
