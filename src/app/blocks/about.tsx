import { Container } from "../components/Container"
import { Content } from "../components/Content"
import { Overline } from "../components/Overline"
import { Wrapper } from "../components/Wrapper"

type InfoCardProps = {
  statValue: string
  statTitle: string
  statDescription: string
}

const InfoCard = ({ statValue, statTitle, statDescription }: InfoCardProps) => (
  <div className="flex flex-col gap-1 bg-gray-100  p-6 dark:bg-indigo-900">
    <em className="text-4xl font-bold not-italic leading-normal text-blue-500 dark:text-rose-500">
      {statValue}
    </em>
    <div className="flex flex-col gap-2">
      <em className="text-base font-bold not-italic leading-tight">
        {statTitle}
      </em>
      <p className="font-normal leading-tight">{statDescription}</p>
    </div>
  </div>
)

export const About = () => {
  return (
    <Container className="w-full max-w-[1344px] flex-1 md:gap-y-24 xl:grid-cols-2">
      <Wrapper className="content-start max-md:items-end xl:col-span-1">
        <Content className="col-span-full max-w-[420px]">
          <div className="flex flex-col gap-2">
            <Overline>summit-23</Overline>
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-3xl font-medium uppercase leading-tight md:text-4xl">
                Securing the digital world
              </h2>
              <p className="text-base font-normal leading-tight">
                Join engineers, security experts, thought leaders, open source
                maintainers, and executives from around the world for a of day
                of conversations on the future of Ory. Register now for your
                pass to presentations, interactive sessions, technical deep
                dives, product news, and more.
              </p>
            </div>
            {/* <ArrowButton href="https://ory.sh">FAQ</ArrowButton> */}
          </div>
        </Content>
      </Wrapper>
      <div className="col-span-full flex flex-col gap-8 sm:flex-row xl:col-span-1">
        <div className="flex flex-1 flex-col gap-8">
          <InfoCard
            statValue="📍"
            statTitle="How can I attend?"
            statDescription="You can attend Ory Summit 2023 on November 9th in person at the Ory Headquarters in Munich, Germany or watch the sessions online, here at summit.ory.sh."
          />
          <InfoCard
            statValue="🎤"
            statTitle="What can I expect?"
            statDescription="The themes at Ory Summit 2023 include leveraging Ory Network for top-notch application security, integrating with third-party solutions and ID migration, enhancing software team productivity, and concept talks covering various topics such as authorization, authentication, open source, compliance, and of course security."
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <InfoCard
            statValue="🤩"
            statTitle="Why attend Ory Summit?"
            statDescription="At Ory Summit 2023, you can enhance your understanding of Ory Network security best practices, gain insights from tech pioneers and industry leaders, improve your skills through engaging tech talks by experts, expand your professional network, and have a great time with the Ory team."
          />
          <InfoCard
            statValue="📆"
            statTitle="When and where?"
            statDescription="Ory Summit 2023 will take place at the House of Communication in Munich's trendy Werksviertel on 9 November 2023."
          />
        </div>
      </div>
    </Container>
  )
}
