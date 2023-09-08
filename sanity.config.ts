/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { defineConfig, InferSchemaValues } from "@sanity-typed/types"
import { visionTool } from "@sanity/vision"
import { markdownSchema } from "sanity-plugin-markdown"
import { deskTool } from "sanity/desk"
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"

const config = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    markdownSchema(),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
export default config

export type SanityValues = InferSchemaValues<typeof config>

export type Speaker = SanityValues["speaker"]
