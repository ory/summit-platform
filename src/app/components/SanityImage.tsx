import { SanityImageSource } from "@sanity/asset-utils"
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image"
import Image from "next/image"
import { ComponentProps } from "react"
import { sanityClient } from "../../../sanity/lib/sanityClient"

export const SanityImage = ({
  imageSource,
  ...otherProps
}: Omit<ComponentProps<typeof Image>, keyof UseNextSanityImageProps> & {
  imageSource: SanityImageSource
}) => {
  const image = useNextSanityImage(sanityClient, imageSource)
  return <Image {...image} {...otherProps} alt={otherProps.alt} />
}
