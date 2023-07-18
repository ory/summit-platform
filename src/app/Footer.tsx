import classNames from "classnames"
import { Container } from "./components/Container"
import { LinkItem } from "./components/LinkItem"
import { Wrapper } from "./components/Wrapper"

export const Footer = () => (
  <footer
    className={classNames(
      "w-full border-t border-blue-500 px-6 py-2 text-sm leading-none dark:border-rose-500",
      "sm:px-12 xl:px-24",
    )}
  >
    <Container className="mx-auto max-w-[1344px]">
      <Wrapper>
        <div className="col-span-full flex flex-col justify-between gap-8 md:flex-row">
          <span>
            <span className="text-blue-500 dark:text-rose-500">©</span> 2023 Ory
          </span>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>
              <LinkItem
                as="a"
                target="_blank"
                href="https://docs.google.com/forms/d/11UeyJE59djiaA21Llsa9jxe2Z3VCRdJU0saa6cNixyc/edit"
              >
                Call for Papers
              </LinkItem>
            </li>
            <li>
              <LinkItem as="a" href="https://slack.ory.sh/" target="_blank">
                Slack
              </LinkItem>
            </li>
            <li>
              <LinkItem as="a" href="">
                Contact
              </LinkItem>
            </li>
            <li>
              <LinkItem as="a" href="https://ory.sh/privacy" target="_blank">
                Privacy
              </LinkItem>
            </li>
            <li>
              <LinkItem as="a" href="">
                Conduct
              </LinkItem>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  </footer>
)
