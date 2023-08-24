import { defineField, defineType } from "@sanity-typed/types"

const speakerSchema = defineType({
  name: "speaker",
  type: "document",
  title: "Speakers",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "position",
      type: "string",
      title: "Position",
    }),
  ],
})

export const schema = {
  types: [speakerSchema],
}
