import classNames from "classnames"
import { PropsWithChildren } from "react"

type OverlineProps = {
  className?: string
}

export const Overline = ({
  children,
  className,
}: PropsWithChildren<OverlineProps>) => {
  return (
    <div
      className={classNames(
        "flex py-1 text-sm font-medium leading-none text-blue-500 dark:text-rose-500",
        className,
      )}
    >
      <span className="absolute -ml-4 flex items-center">#</span>
      {children}
    </div>
  )
}
