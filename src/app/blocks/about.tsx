import { ArrowButton } from "../components/ArrowButton"
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
  <div className="flex flex-col gap-1 bg-rose-100 p-6 dark:bg-indigo-900">
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
                Why attend?
              </h2>
              <p className="text-base font-normal leading-tight">
                Join engineers, devops teams, thought leaders, and executives
                from around the world for a of day of conversations on the
                future Ory. Register now for your pass to hands-on learning,
                certifications, product news, and more.
              </p>
            </div>
            <ArrowButton href="https://ory.sh">FAQ</ArrowButton>
          </div>
        </Content>
      </Wrapper>
      <div className="col-span-full flex gap-8 xl:col-span-1">
        <div className="flex flex-1 flex-col gap-8">
          <InfoCard
            statValue="10+"
            statTitle="Keynotes & product roadmap sessions"
            statDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste quo doloremque provident quasi labore debitis, ut tenetur sapiente, voluptas praesentium odio earum cupiditate. Natus asperiores laborum hic libero consectetur."
          />
          <InfoCard
            statValue="10+"
            statTitle="Keynotes & product roadmap sessions"
            statDescription="Hear the latest product news from HashiCorp executives and experts."
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <InfoCard
            statValue="10+"
            statTitle="Keynotes & product roadmap sessions"
            statDescription="Hear the latest product news from HashiCorp executives and experts."
          />
          <InfoCard
            statValue="10+"
            statTitle="Keynotes & product roadmap sessions"
            statDescription="Hear the latest product news from HashiCorp executives and experts."
          />
        </div>
      </div>
    </Container>
  )
}
