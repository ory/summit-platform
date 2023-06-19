import classNames from "classnames"
import Link from "next/link"
import { Button } from "./components/Button"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { RightArrow } from "./components/RightArrow"
import { Wrapper } from "./components/Wrapper"

export const Navigation = () => (
  <nav
    className={classNames(
      "relative flex items-stretch justify-center px-6 text-lg leading-tight",
      "sm:px-12 xl:px-24",
      "before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-6 before:bg-blue-500 dark:before:bg-rose-500",
      "after:absolute after:bottom-0 after:right-0 after:block after:h-[1px] after:w-6 after:bg-blue-500 dark:after:bg-rose-500",
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
          <div className="shrink-0">
            <Button as="a" href="https://google.com">
              <RightArrow className="md:hidden" />
              <span className="hidden text-sm leading-none md:inline-block">
                Get your ticket
              </span>
            </Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  </nav>
)
