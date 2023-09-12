import { getDeploymentBaseUrl } from "@/utils/get-deployment-base-url"
import Iframe from "sanity-plugin-iframe-pane"
import { DefaultDocumentNodeResolver } from "sanity/lib/exports/desk"

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: `${getDeploymentBaseUrl()}/preview`,
      })
      .title("Preview"),
  ])
}
