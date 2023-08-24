import { defineField, defineType } from "@sanity-typed/types"

const speakerSchema = defineType({
  name: "speaker",
  type: "document",
  title: "Speakers",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
    }),
  ],
})

export const schema = {
  types: [speakerSchema],
}
