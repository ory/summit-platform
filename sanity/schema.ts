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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const schema = {
  types: [speakerSchema],
}
