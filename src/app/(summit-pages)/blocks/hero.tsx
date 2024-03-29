"use client"

import { useIsLive } from "@/hooks/useIsLive"
import { useIsRegistered } from "@/hooks/useRegistration"
import BackgroundMountains from "../../components/background-video"
import { Container } from "../../components/container"
import { Content } from "../../components/content"

export function Hero() {
  const { data: isRegistered } = useIsRegistered()
  const isLive = useIsLive()

  return (
    <>
      <BackgroundMountains />
      <Container className="flex min-h-full w-full max-w-[--ory-max-content-width] flex-1 flex-col">
        <Content className="col-span-full mt-auto flex max-w-[420px] bg-white/30 p-2 backdrop-blur-md backdrop-filter dark:bg-black/30 md:mt-0 lg:bg-transparent">
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
          The summit has ended, the recordings will be available soon.
        </Content>
      </Container>
    </>
  )
}
