import classNames from "classnames"
import { PropsWithChildren } from "react"

interface PropTypes {
  className?: string
  individualGap?: string
}

export const Wrapper = ({
  children,
  className,
  individualGap,
}: PropsWithChildren<PropTypes>) => {
  return (
    <div
      className={classNames(
        "col-span-full grid grid-cols-6 items-center md:grid-cols-12",
        individualGap
          ? individualGap
          : "gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16",
        className,
      )}
    >
      {children}
    </div>
  )
}
