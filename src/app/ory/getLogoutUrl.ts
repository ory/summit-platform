import { frontendApi as oryFrontendApi } from "./frontendApi"

export const getLogoutUrl = async (returnTo?: string) => {
  const { data: session } = await oryFrontendApi.createBrowserLogoutFlow({
    returnTo,
  })
  return session.logout_url
}
