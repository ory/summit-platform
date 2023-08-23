import { ArrowButton } from "@/app/components/arrow-button"
import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import { cn } from "@/utils/cn"
import Image from "next/image"
import venueMap from "../../../public/venue-map.webp"

const googleMapsLink = "https://goo.gl/maps/TApBM2cJ282X8smy6"

const gridSetup = "grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-1"

export const Venue = () => (
  <>
    <div className={cn("absolute inset-0", gridSetup)}>
      {/*
          The image is expected to be white on transparent. In that case, the CSS
          is able to map the white to any given color.
          Due to how it works, we need to distinguish between target colors that are
          lighter than the background and target colors that are darker than the
          background (they require either mapping to black + target color -> lighten
          or white + target color -> darken).
       */}
      <div className="relative w-full border-b border-b-blue-500 dark:border-b-rose-500 xl:col-start-2">
        <a
          className="h-full w-full mix-blend-darken invert dark:mix-blend-lighten dark:invert-0"
          href={googleMapsLink}
          target="_blank"
        >
          <Image
            src={venueMap}
            alt="View the location on Google Maps"
            className="h-full w-full bg-black object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-500 mix-blend-multiply invert dark:bg-[#F5538D] dark:invert-0"></div>
        </a>
      </div>
    </div>

    <div
      className={cn(
        "relative z-10 flex h-full min-h-screen p-6 sm:p-12 md:py-24 lg:py-24 xl:items-start xl:px-24",
        gridSetup,
        "xl:grid-cols-1 xl:justify-items-center",
      )}
    >
      <Container className="row-start-2 h-full w-full max-w-[1344px] flex-1 shrink pt-6 sm:pt-12 md:pt-24 xl:row-start-auto xl:pt-0">
        <Wrapper className="content-end xl:content-start">
          <Content className="col-span-full flex flex-col gap-y-2 xl:h-[600px] xl:justify-center 2xl:h-[648px]">
            <Overline href="#venue">location</Overline>
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-4xl font-medium uppercase leading-tight md:text-5xl md:leading-tight">
                The venue
              </h2>
              <address className="text-base not-italic leading-tight">
                Ory Corp <br />
                August-Everding-Str 25 <br />
                81671 München <br />
                <br />
                [the summit is on 4th floor] <br />
                &nbsp;
              </address>
            </div>
            <ArrowButton href={googleMapsLink} target="_blank">
              Get directions
            </ArrowButton>
          </Content>
        </Wrapper>
      </Container>
    </div>
    {/*</div>*/}
  </>
)
