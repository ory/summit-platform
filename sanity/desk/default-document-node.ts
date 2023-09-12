import { getDeploymentOrigin } from "@/utils/get-deployment-origin"
import Iframe from "sanity-plugin-iframe-pane"
import { DefaultDocumentNodeResolver } from "sanity/lib/exports/desk"

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: `${getDeploymentOrigin()}/preview`,
      })
      .title("Preview"),
  ])
}
