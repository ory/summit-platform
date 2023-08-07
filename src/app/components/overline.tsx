import { cn } from "@/utils/cn"
import Link from "next/link"
import { PropsWithChildren } from "react"

type OverlineProps = {
  className?: string
  href?: string
}

export const Overline = ({
  children,
  className,
  href,
}: PropsWithChildren<OverlineProps>) => {
  const poundSign = <span className="absolute -ml-4 flex items-center">#</span>
  const overlineClasses = cn(
    "flex py-1 text-sm font-medium leading-none text-blue-500 dark:text-rose-500",
    className,
  )

  if (href !== undefined) {
    return (
      <Link href={href} className={overlineClasses}>
        {poundSign}
        {children}
      </Link>
    )
  }

  return (
    <div className={overlineClasses}>
      {poundSign}
      {children}
    </div>
  )
}
