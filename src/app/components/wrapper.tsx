import { cn } from "@/utils/cn"
import { PropsWithChildren } from "react"

interface PropTypes {
  className?: string
}

export const Wrapper = ({
  children,
  className,
}: PropsWithChildren<PropTypes>) => {
  return (
    <div
      className={cn(
        "col-span-full grid grid-cols-6 items-center md:grid-cols-12",
        "gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16",
        className,
      )}
    >
      {children}
    </div>
  )
}
