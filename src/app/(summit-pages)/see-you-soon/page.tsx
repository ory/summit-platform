import { cn } from "@/utils/cn"
import Link from "next/link"
import { Button } from "../../components/button"
import { Container } from "../../components/container"
import { Content } from "../../components/content"
import Countdown from "../../components/countdown"
import { dividerStyles } from "../../components/dividerStyles"
import { Wrapper } from "../../components/wrapper"
import { summitStartingDate } from "../startingDate"

export default function SeeYouSoon() {
  return (
    <main
      className={cn(
        dividerStyles,
        "flex flex-1 flex-col items-center justify-end p-6 sm:p-12 md:justify-start md:py-24 lg:p-24",
      )}
    >
      <Container className="w-full max-w-[--ory-max-content-width]">
        <Wrapper>
          <Content className="col-span-full max-w-[420px]">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-4xl font-medium uppercase leading-tight">
                You{"'"}re in!
              </h1>
              <p>
                Add Ory Summit to your calendar on{" "}
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231109T083000Z%2F20231109T160000Z&details=Clear%20your%20schedule%20for%20Ory%20Summit%202023%21%0A%0AJoin%20us%20to%20learn%20the%20latest%20in%20Ory%2C%20get%20demos%20of%20key%20features%2C%20and%20interact%20with%20presenters%20and%20the%20Ory%20community%20%40%20https%3A%2F%2Fsummit.ory.sh%2F%0A%0AStart%20chatting%20with%20fellow%20attendees%20today%3A%20https%3A%2F%2Fslack.ory.sh%2F&location=August-Everding-Str%2025%2C%2081671%20M%C3%BCnchen&text=Ory%20Summit%202023">
                  Google
                </a>
                ,{" "}
                <a href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Clear%20your%20schedule%20for%20Ory%20Summit%202023%21%0A%0AJoin%20us%20to%20learn%20the%20latest%20in%20Ory%2C%20get%20demos%20of%20key%20features%2C%20and%20interact%20with%20presenters%20and%20the%20Ory%20community%20%40%20https%3A%2F%2Fsummit.ory.sh%2F%0A%0AStart%20chatting%20with%20fellow%20attendees%20today%3A%20https%3A%2F%2Fslack.ory.sh%2F&enddt=2023-11-09T16%3A00%3A00%2B00%3A00&location=August-Everding-Str%2025%2C%2081671%20M%C3%BCnchen&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-11-09T08%3A30%3A00%2B00%3A00&subject=Ory%20Summit%202023">
                  Outlook
                </a>
                , or{" "}
                <a href="https://outlook.office.com/calendar/action/compose?allday=false&body=Clear%20your%20schedule%20for%20Ory%20Summit%202023%21%0A%0AJoin%20us%20to%20learn%20the%20latest%20in%20Ory%2C%20get%20demos%20of%20key%20features%2C%20and%20interact%20with%20presenters%20and%20the%20Ory%20community%20%40%20https%3A%2F%2Fsummit.ory.sh%2F%0A%0AStart%20chatting%20with%20fellow%20attendees%20today%3A%20https%3A%2F%2Fslack.ory.sh%2F&enddt=2023-11-09T16%3A00%3A00%2B00%3A00&location=August-Everding-Str%2025%2C%2081671%20M%C3%BCnchen&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-11-09T08%3A30%3A00%2B00%3A00&subject=Ory%20Summit%202023">
                  Office365
                </a>
                .
              </p>
              <p>
                Until the event, you can browse through the{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://www.ory.sh/summit/2022/"
                >
                  event highlights and talks from Ory Summit 2022
                </a>{" "}
                to get a taste of what{"'"}s in store for our upcoming
                conference.
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
