import { Footer } from "@/app/(summit-pages)/footer"
import { Navigation } from "@/app/(summit-pages)/navigation"
import { Providers } from "@/app/(summit-pages)/providers"
import { getSpeakers, getTalks } from "../../../sanity/lib/sanityClient"

export const metadata = {
  title: {
    default: "Ory Summit 2023",
    template: "%s | Ory Summit 2023",
  },
  description:
    "A global, one-day conference around first party data, privacy, application authorisation, identity, authentication, end-to-end security based on zero trust principles.",
}

export default async function SummitLayout({ children }) {
  const speakers = await getSpeakers()
  const talks = await getTalks()
  return (
    <Providers speakers={speakers} talks={talks}>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        {children}
      </div>
      <Footer />
    </Providers>
  )
}
