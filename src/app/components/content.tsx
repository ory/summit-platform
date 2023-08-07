import { cn } from "@/utils/cn"
import { PropsWithChildren } from "react"

type ContentProps = {
  className?: string
}

export const Content = ({
  className,
  children,
}: PropsWithChildren<ContentProps>) => (
  <div className={cn("flex flex-col gap-8", className)}>{children}</div>
)
