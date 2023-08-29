"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import BackgroundMountains from "../components/background-video"
import { Banner } from "../components/banner"
import { Container } from "../components/container"
import { Content } from "../components/content"
import Countdown from "../components/countdown"
import { GetTicketButton } from "../components/get-ticket-button"
import { summitStartingDate } from "../startingDate"
import { HERO_GET_TICKET_BUTTON_ID } from "./heroGetTicketButtonId"

export function Hero() {
  const { data: isRegistered } = useIsRegistered()

  return (
    <>
      <BackgroundMountains />
      <Container className="flex min-h-full w-full max-w-[1344px] flex-1 flex-col">
        <Content className="col-span-full mt-auto flex max-w-[420px] bg-white/30 p-2 backdrop-blur-md backdrop-filter dark:bg-black/30 md:mt-0 lg:bg-transparent">
          <Banner
            target="_blank"
            href="https://docs.google.com/forms/d/11UeyJE59djiaA21Llsa9jxe2Z3VCRdJU0saa6cNixyc/edit"
          >
            Speak at ory/summit-23
          </Banner>
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-4xl font-medium uppercase leading-tight">
              {!isRegistered ? (
                <>
                  Ory Summit
                  <br />
                  2023
                </>
              ) : (
                "You're all set up"
              )}
            </h1>
            <p>
              A global, one-day conference around first party data, privacy,
              application authorisation, identity, authentication, end-to-end
              security based on zero trust principles.
            </p>
          </div>
          <GetTicketButton
            className="self-start"
            id={HERO_GET_TICKET_BUTTON_ID}
          />
          <Countdown targetDate={summitStartingDate} />
        </Content>
      </Container>
    </>
  )
}
