import { cn } from "@/utils/cn"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import { RightArrow } from "./right-arrow"

export const ArrowButton = ({
  className,
  children,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => (
  <a
    {...props}
    className={cn(
      "flex max-w-max items-center bg-blue-500 p-1 text-sm leading-normal text-white dark:bg-rose-500 dark:text-gray-900",
      className,
    )}
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
