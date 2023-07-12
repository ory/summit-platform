import classNames from "classnames"
import Link from "next/link"
import { Container } from "./components/Container"
import { dividerStyles } from "./components/DividerStyles"
import { GetTicketButton } from "./components/GetTicketButton"
import { Logo } from "./components/Logo"
import UserMenu from "./components/UserMenu/UserMenu"
import { Wrapper } from "./components/Wrapper"

export const Navigation = async () => {
  return (
    <nav
      className={classNames(
        "relative flex items-stretch justify-center px-6 text-lg leading-tight",
        "sm:px-12 xl:px-24",
        dividerStyles,
      )}
    >
      <Container className="max-w-[1344px] flex-1">
        <Wrapper className="py-2">
          <div className="col-span-full flex">
            <div>
              <div className="flex items-center gap-[2px]">
                <a href={process.env.ORY_WEB_URL} target="_blank">
                  <Logo />
                </a>
                <span className="text-blue-500 dark:text-rose-500">/</span>
                <Link href="/">summit-23</Link>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex shrink-0 items-center gap-4">
              <GetTicketButton />
              <UserMenu />
            </div>
          </div>
        </Wrapper>
      </Container>
    </nav>
  )
}
