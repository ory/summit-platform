import { NormalizedProject } from "@ory/client"

export const getNormalizedProject = async (projectId: string): Promise<
  NormalizedProject | undefined
> => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_ORY_API_URL + "/normalized/projects/" + projectId,
    )
    const result = await res.json()
    return result
  } catch (e) {
    return undefined
  }
}
