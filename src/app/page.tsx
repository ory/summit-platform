import { cn } from "@/utils/cn"
import { About } from "./blocks/about"
import { Hero } from "./blocks/hero"
import { dividerStyles } from "./components/dividerStyles"

export default function Page() {
  const paddingClassnames = "p-6 sm:p-12 md:py-24 lg:p-24"

  return (
    <main className={cn("flex flex-1 flex-col")}>
      <div
        className={cn(
          dividerStyles,
          paddingClassnames,
          "relative flex flex-col items-center justify-end md:justify-start",
          "min-h-[calc(100vh-68px-1px)]",
        )}
      >
        <Hero />
      </div>
      <div
        className={cn(paddingClassnames, dividerStyles, "flex justify-center")}
      >
        <About />
      </div>
    </main>
  )
}
