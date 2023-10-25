import { cn } from "@/utils/cn"
import Link from "next/link"
import { Container } from "../components/container"
import { dividerStyles } from "../components/dividerStyles"
import { Logo } from "../components/logo"
import { Wrapper } from "../components/wrapper"
import { NavigationRightHandSide } from "./navigation-right"

export const Navigation = async () => {
  return (
    <nav
      className={cn(
        "top-0 z-10 flex items-stretch justify-center bg-white px-[--ory-global-padding] text-lg leading-tight dark:bg-indigo-950",
        dividerStyles,
        // would be overridden by divider styles otherwise
        "sticky",
      )}
    >
      <Container className="max-w-[--ory-max-content-width] flex-1">
        <Wrapper className="py-2">
          <div className="col-span-full flex">
            <div>
              <div className="flex items-center gap-[2px]">
                <a
                  href={process.env.NEXT_PUBLIC_ORY_WEB_URL}
                  target="_blank"
                  aria-label="Ory Homepage"
                >
                  <Logo />
                </a>
                <span className="text-blue-500 dark:text-rose-500 max-sm:hidden">
                  /
                </span>
                <Link href="/" className="max-sm:hidden">
                  summit-23
                </Link>
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
