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
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Will be used to link to the details view of this speaker, e.g. https://summit.ory.sh/?viewSpeaker=thomas-curran#speakers. Will auto-generate from name",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority (range [1, 1000])",
      description:
        "Will be used for sorting in speakers list. Higher = will be shown first. Speakers with equal prio will be sorted by name ASC. Defaults to 500 if not set.",
      type: "number",
      validation: (Rule) => Rule.min(1).max(1000),
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
    defineField({
      name: "twitterHandle",
      title: "Twitter handle",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /^[^@]/,
          // For some reason, this function is typed to expect only 1 parameter
          // when, in reality and according to JSDocs, it expects 1-3
          // @ts-ignore
          "The user name must be entered without the preceding @",
        ),
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
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Will be used to link to the details view of this talk, e.g. https://summit.ory.sh/?viewSession=my-awesome-talks-title#agenda. Will auto-generate from title.",
      options: {
        source: "title",
      },
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
