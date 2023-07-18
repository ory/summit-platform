import classNames from "classnames"
import Link from "next/link"
import { NavigationRightHandSide } from "./NavigationRightHandSide"
import { Container } from "./components/Container"
import { dividerStyles } from "./components/DividerStyles"
import { Logo } from "./components/Logo"
import { Wrapper } from "./components/Wrapper"

export const Navigation = async () => {
  return (
    <nav
      className={classNames(
        "sticky top-0 z-10 flex items-stretch justify-center bg-white px-6 text-lg leading-tight dark:bg-indigo-950",
        "sm:px-12 xl:px-24",
        dividerStyles,
      )}
    >
      <Container className="max-w-[1344px] flex-1">
        <Wrapper className="py-2">
          <div className="col-span-full flex">
            <div>
              <div className="flex items-center gap-[2px]">
                <a href={process.env.NEXT_PUBLIC_ORY_WEB_URL} target="_blank">
                  <Logo />
                </a>
                <span className="text-blue-500 dark:text-rose-500">/</span>
                <Link href="/">summit-23-test</Link>
              </div>
            </div>
            <div className="flex-1"></div>
            <NavigationRightHandSide />
          </div>
        </Wrapper>
      </Container>
    </nav>
  )
}
