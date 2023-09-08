import { SanityImageSource } from "@sanity/asset-utils"
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image"
import Image from "next/image"
import { ComponentProps } from "react"
import { client } from "../../../sanity/lib/client"

export const SanityImage = ({
  imageSource,
  ...otherProps
}: Omit<ComponentProps<typeof Image>, keyof UseNextSanityImageProps> & {
  imageSource: SanityImageSource
}) => {
  const image = useNextSanityImage(client, imageSource)
  return <Image {...image} {...otherProps} />
}
