import classNames from "classnames"
import Link from "next/link"
import { Suspense } from "react"
import { Button } from "./components/Button"
import { Container } from "./components/Container"
import { dividerStyles } from "./components/DividerStyles"
import { Logo } from "./components/Logo"
import { RightArrow } from "./components/RightArrow"
import UserMenu from "./components/UserMenu/UserMenu"
import { Wrapper } from "./components/Wrapper"
import { getSession } from "./ory/getSession"

export const Navigation = async () => {
  const session = await getSession()

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
              <Link href="/" className="flex items-center gap-[2px]">
                <Logo />
                <span className="text-blue-500 dark:text-rose-500">/</span>
                <span>summit-23</span>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="flex shrink-0 items-center gap-4">
              <Button
                as="a"
                href={`${process.env.ORY_CONSOLE_URL}/login?redirect_to=https://google.com`}
              >
                <RightArrow className="md:hidden" />
                <span className="hidden text-sm leading-none md:inline-block">
                  Get your ticket
                </span>
              </Button>
              {session && (
                <Suspense fallback={null}>
                  <UserMenu />
                </Suspense>
              )}
            </div>
          </div>
        </Wrapper>
      </Container>
    </nav>
  )
}
