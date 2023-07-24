import { cn } from "@/utils/cn"
import { PropsWithChildren } from "react"
import { RightArrow } from "./right-arrow"

type ArrowButtonProps = {
  className?: string
  href: string
}

export const ArrowButton = ({
  className,
  children,
  href,
}: PropsWithChildren<ArrowButtonProps>) => (
  <a
    className={cn(
      "flex max-w-max items-center bg-blue-500 p-1 text-sm leading-normal text-white dark:bg-rose-500 dark:text-gray-900",
      className,
    )}
    href={href}
  >
    <div className="absolute -ml-7 flex items-center">
      <RightArrow
        width={15}
        height={12}
        className="text-blue-500 dark:text-rose-500"
      />
    </div>
    {children}
  </a>
)
