import { getDeploymentOrigin } from "@/utils/get-deployment-origin"
import Iframe from "sanity-plugin-iframe-pane"
import { DefaultDocumentNodeResolver } from "sanity/lib/exports/desk"
import { match } from "ts-pattern"

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  return S.document().views([
    S.view.form(),
    ...match(schemaType)
      .with("speaker", () => [
        S.view
          .component(Iframe)
          .options({
            url: `${getDeploymentOrigin()}/preview`,
          })
          .title("Preview"),
      ])
      .otherwise(() => []),
  ])
}
