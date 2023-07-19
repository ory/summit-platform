import { cn } from "@/utils/cn"
import Link from "next/link"
import { ElementType, PropsWithChildren } from "react"

type ButtonProps = {
  className?: string
}

export const Button = <C extends "a" | "button" | typeof Link = "button">({
  as,
  children,
  className,
  ...rest
}: PolymorphicComponentProps<C, PropsWithChildren<ButtonProps>>) => {
  const Component: ElementType = as ?? "button"
  return (
    <Component
      className={cn(
        "flex min-w-min gap-2 border border-blue-500 bg-blue-500 px-5 py-[10px] font-normal text-white dark:border-rose-500 dark:bg-rose-500",
        "hover:border-blue-500 hover:bg-rose-100 hover:text-blue-500 dark:hover:border-rose-500 dark:hover:bg-gray-900 dark:hover:text-rose-500",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
