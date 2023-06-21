import classNames from "classnames"
import Link from "next/link"
import { Button } from "../components/Button"
import { Container } from "../components/Container"
import { Content } from "../components/Content"
import Countdown from "../components/Countdown"
import { dividerStyles } from "../components/DividerStyles"
import { Wrapper } from "../components/Wrapper"
import { summitStartingDate } from "../startingDate"

export default function SeeYouSoon() {
  return (
    <main
      className={classNames(
        dividerStyles,
        "flex flex-1 flex-col items-center justify-end p-6 sm:p-12 md:justify-start md:py-24 lg:p-24",
      )}
    >
      <Container className="w-full max-w-[1344px]">
        <Wrapper>
          <Content className="col-span-full max-w-[420px]">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-4xl font-medium uppercase leading-tight">
                You are all set for now!
              </h1>
              <p>
                We have received your information and we appreciate your
                interest.
              </p>
              <p>
                We will make sure to promptly inform you as soon as we have more
                updates and news to share on the Ory Summit 2023.
              </p>
              <p>
                In the meantime you can browse through the event highlights and
                talks from{" "}
                <a href="https://www.ory.sh/summit/2022/">Ory Summit 2022</a> to
                get a taste of what's in store for our upcoming conference.
              </p>
            </div>
            <Button className="self-start" as={Link} href="/">
              Back to overview
            </Button>
            <Countdown targetDate={summitStartingDate} />
          </Content>
        </Wrapper>
      </Container>
    </main>
  )
}
