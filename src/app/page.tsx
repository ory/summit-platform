import classNames from "classnames"
import { About } from "./blocks/about"
import { BackgroundMountains } from "./components/BackgroundMountains"
import { Banner } from "./components/Banner"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import Countdown from "./components/Countdown"
import { dividerStyles } from "./components/DividerStyles"
import { GetTicketButton } from "./components/GetTicketButton"
import { Wrapper } from "./components/Wrapper"
import { getIsRegistered } from "./hubspot/api"
import { summitStartingDate } from "./startingDate"

export default async function Page() {
  const isRegistered = await getIsRegistered()

  const paddingClassnames = "p-6 sm:p-12 md:py-24 lg:p-24"

  return (
    <main className={classNames("flex flex-1 flex-col")}>
      <div
        className={classNames(
          dividerStyles,
          paddingClassnames,
          "flex flex-col items-center justify-end md:justify-start",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <BackgroundMountains />
        <Container className="min-h-full w-full max-w-[1344px] flex-1">
          <Wrapper className="xl:max-h-600px max-xl:items-start max-md:items-end xl:max-h-[648px]">
            <Content className="col-span-full max-w-[420px]">
              <Banner>Speak at ory/summit-23</Banner>
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
                  The Ory Summit brings together business leaders and builders
                  to discuss the most important internet economy trends.
                </p>
              </div>
              <GetTicketButton className="self-start" />
              <Countdown targetDate={summitStartingDate} />
            </Content>
          </Wrapper>
        </Container>
      </div>
      <div
        className={classNames(
          paddingClassnames,
          dividerStyles,
          "flex justify-center",
        )}
      >
        <About />
      </div>
    </main>
  )
}
