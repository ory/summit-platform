import classNames from "classnames"
import { Banner } from "./components/Banner"
import { Button } from "./components/Button"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import Countdown from "./components/Countdown"
import { dividerStyles } from "./components/DividerStyles"
import { Wrapper } from "./components/Wrapper"
import { summitStartingDate } from "./startingDate"

export default function Page() {
  return (
    <main
      className={classNames(
        dividerStyles,
        "flex flex-col items-center justify-end p-6 sm:p-12 md:justify-start md:py-24 lg:p-24",
      )}
    >
      <Container className="w-full max-w-[1344px]">
        <Wrapper>
          <Content className="col-span-full max-w-[420px]">
            <Banner>Speak at ory/summit23</Banner>
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-4xl font-medium uppercase leading-tight">
                Ory Summit
                <br />
                2023
              </h1>
              <p>
                The Ory Summit brings together business leaders and builders to
                discuss the most important internet economy trends.
              </p>
            </div>
            <Button className="self-start">Get your ticket</Button>
            <Countdown targetDate={summitStartingDate} />
          </Content>
        </Wrapper>
      </Container>
    </main>
  )
}
