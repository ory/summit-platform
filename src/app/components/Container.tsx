import classNames from "classnames"
import { PropsWithChildren } from "react"

interface PropTypes {
  individualGap?: string
  className?: string
}

export const Container = ({
  individualGap = "",
  children,
  className,
}: PropsWithChildren<PropTypes>) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-6 p-2 md:grid-cols-12",
        individualGap
          ? individualGap
          : "gap-x-6 gap-y-16 lg:gap-x-8 lg:gap-y-24",
        className,
      )}
    >
      {children}
    </div>
  )
}
