import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"

const speakers = [
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
  {
    name: "{name}",
    position: "{expert}",
  },
]

export const Speakers = () => (
  <Container>
    <Wrapper>
      <Content className="col-span-full">
        <div className="flex flex-col gap-2">
          <Overline>speakers</Overline>
          <h2 className="text-3xl font-medium uppercase leading-tight">
            The lineup 2023
          </h2>
        </div>
        <div className="flex gap-4 text-3xl font-medium leading-tight text-blue-500">
          <button className="disabled:text-blue-300">&lt;-</button>
          <button className="disabled:text-blue-300">-&gt;</button>
        </div>
      </Content>
    </Wrapper>
    <div className="col-span-full flex gap-4 overflow-auto">
      {speakers.map((speaker, index) => (
        <div
          key={index}
          className="flex h-[467px] w-[249px] flex-col justify-between bg-gray-100 p-8"
        >
          <img
            src=""
            alt=""
            className="aspect-square w-[272px] rounded-full border-2 border-gray-900"
          />
          <div className="h-[114px]">
            <p className="flex flex-col gap-2 leading-normal">
              <span className="text-2xl font-bold">{speaker.name}</span>
              <span className="text=xl">{speaker.position}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </Container>
)
