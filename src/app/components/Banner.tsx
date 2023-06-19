import classNames from "classnames"
import { PropsWithChildren } from "react"
import { RightArrow } from "./RightArrow"

type BannerProps = { className?: string }

export const Banner = ({
  className,
  children,
}: PropsWithChildren<BannerProps>) => (
  <div
    className={classNames(
      "flex max-w-max items-center border border-current px-3 py-1 text-sm",
      className,
    )}
  >
    <div className="absolute -ml-9 flex h-full items-center">
      <RightArrow
        width={15}
        height={12}
        className="text-blue-500 dark:text-rose-500"
      />
    </div>
    {children}
  </div>
)
