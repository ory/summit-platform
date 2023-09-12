import { match } from "ts-pattern"
import { Talk } from "../../sanity/lib/client"

export const getReadableSpeakerList = (talk: Talk, media?: "twitter") => {
  const speakerNames = talk.speakers.map(
    (speaker) =>
      match(media)
        .with("twitter", () =>
          speaker.twitterHandle ? `@${speaker.twitterHandle}` : undefined,
        )
        .otherwise(() => undefined) ?? speaker.name,
  )
  const firstSpeakers = speakerNames.slice(0, -1)
  const lastSpeaker = speakerNames.at(-1)
  return [firstSpeakers.join(", "), lastSpeaker].join(" and ")
}
