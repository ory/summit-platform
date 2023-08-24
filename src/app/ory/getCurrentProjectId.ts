import { oryProjectApi } from "./frontendApi"

export const getCurrentProjectId = async () => {
  try {
    const { data } = await oryProjectApi.getActiveProjectInConsole()
    return data?.project_id
  } catch (e) {
    return undefined
  }
}
