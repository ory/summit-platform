import classNames from "classnames"
import { PropsWithChildren } from "react"

type ContentProps = {
  className?: string
}

export const Content = ({
  className,
  children,
}: PropsWithChildren<ContentProps>) => (
  <div className={classNames(className, "flex flex-col gap-8")}>{children}</div>
)
