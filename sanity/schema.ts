import { defineArrayMember, defineField, defineType } from "@sanity-typed/types"

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
      name: "description",
      title: "Description",
      // Type casting needed to help type inference as 'markdown' comes from a plugin
      type: "markdown" as "text",
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

const talkSchema = defineType({
  name: "talk",
  type: "document",
  title: "Talks",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      // Type casting needed to help type inference as 'markdown' comes from a plugin
      type: "markdown" as "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "speaker" } as const],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "startTime",
      title: "Starting time",
      type: "datetime",
      // two hours before Munich time
      initialValue: "2023-11-09T10:00:00.000Z",
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const schema = {
  types: [speakerSchema, talkSchema],
}
