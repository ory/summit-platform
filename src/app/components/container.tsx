import { cn } from "@/utils/cn"
import { PropsWithChildren } from "react"

interface PropTypes {
  className?: string
}

export const Container = ({
  children,
  className,
}: PropsWithChildren<PropTypes>) => {
  return (
    <div
      className={cn(
        "[--ory-container-padding:8px]",
        "grid grid-cols-6 p-[--ory-container-padding] md:grid-cols-12",
        "gap-x-6 gap-y-16 lg:gap-x-8 lg:gap-y-24",
        className,
      )}
    >
      {children}
    </div>
  )
}
