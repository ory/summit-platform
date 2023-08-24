import { type SchemaTypeDefinition } from "sanity"

const speakerSchema = {
  name: "speaker",
  type: "document",
  title: "Speakers",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
    },
  ],
} satisfies SchemaTypeDefinition

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [speakerSchema],
}
