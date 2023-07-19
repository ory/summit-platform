import { cn } from '@/utils/cn'
import Link from "next/link"
import { PropsWithChildren } from "react"

type LinkItemProps = {
  className?: string
}

export const LinkItem = <C extends "a" | typeof Link = "a">({
  as,
  children,
  className,
  ...rest
}: PolymorphicComponentProps<C, PropsWithChildren<LinkItemProps>>) => {
  const Component: any = as ?? "a"
  return (
    <Component
      className={cn(
        "hover:text-blue-500 dark:hover:text-rose-500",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
