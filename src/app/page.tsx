import { Banner } from "./components/Banner"
import { Container } from "./components/Container"
import Countdown from "./components/Countdown"
import { Wrapper } from "./components/Wrapper"
import { summitStartingDate } from "./startingDate"

export default function Page() {
  return (
    <div>
      <Container>
        <Wrapper>
          <div className="col-span-full p-6">
            <Banner>Speak at ory/summit23</Banner>
            <Countdown targetDate={summitStartingDate} />
          </div>
        </Wrapper>
      </Container>
    </div>
  )
}
