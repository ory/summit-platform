import { createContext, useContext } from "react"
import { Talk } from "../../sanity/lib/sanityClient"
import { Speaker } from "../../sanity.config"

const sanityContext = createContext({
  talks: [] as Talk[],
  speakers: [] as Speaker[],
})

export const useSanityContext = () => useContext(sanityContext)

export const SanityProvider = sanityContext.Provider
