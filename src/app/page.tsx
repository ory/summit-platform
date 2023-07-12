import classNames from "classnames"
import { About } from "./blocks/about"
import { Hero } from "./blocks/hero"
import { dividerStyles } from "./components/DividerStyles"

export default function Page() {
  const paddingClassnames = "p-6 sm:p-12 md:py-24 lg:p-24"

  return (
    <main className={classNames("flex flex-1 flex-col")}>
      <div
        className={classNames(
          dividerStyles,
          paddingClassnames,
          "flex flex-col items-center justify-end md:justify-start",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <Hero />
      </div>
      <div
        className={classNames(
          paddingClassnames,
          dividerStyles,
          "flex justify-center",
        )}
      >
        <About />
      </div>
    </main>
  )
}
