"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import { BackgroundMountains } from "../components/BackgroundMountains"
import { Banner } from "../components/Banner"
import { Container } from "../components/Container"
import { Content } from "../components/Content"
import Countdown from "../components/Countdown"
import { GetTicketButton } from "../components/GetTicketButton"
import { Wrapper } from "../components/Wrapper"
import { summitStartingDate } from "../startingDate"
import { HERO_GET_TICKET_BUTTON_ID } from "./heroGetTicketButtonId"

export function Hero() {
  const { data: isRegistered } = useIsRegistered()

  return (
    <>
      <BackgroundMountains />
      <Container className="min-h-full w-full max-w-[1344px] flex-1">
        <Wrapper className="xl:max-h-600px max-xl:items-start max-md:items-end xl:max-h-[648px]">
          <Content className="col-span-full max-w-[420px]">
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
                The Ory Summit brings together business leaders and builders to
                discuss the most important internet economy trends.
              </p>
            </div>
            <GetTicketButton
              className="self-start"
              id={HERO_GET_TICKET_BUTTON_ID}
            />
            <Countdown targetDate={summitStartingDate} />
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}
