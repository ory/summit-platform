import { frontendApi as oryFrontendApi } from "./api"

export const getLogoutUrl = async (returnTo?: string) => {
  const { data: session } = await oryFrontendApi.createBrowserLogoutFlow({
    returnTo,
  })
  return session.logout_url
}
