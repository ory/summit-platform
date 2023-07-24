import { cn } from "@/utils/cn"
import Link from "next/link"
import { ComponentProps, PropsWithChildren } from "react"
import { RightArrow } from "./right-arrow"

type BannerProps = { className?: string; href: string } & ComponentProps<
  typeof Link
>

export const Banner = ({
  className,
  children,
  ...linkProps
}: PropsWithChildren<BannerProps>) => (
  <Link
    {...linkProps}
    className={cn(
      "flex max-w-max items-center border border-current px-3 py-1 text-sm",
      className,
    )}
  >
    <div className="absolute -ml-11 flex items-center">
      <RightArrow
        width={15}
        height={12}
        className="text-blue-500 dark:text-rose-500"
      />
    </div>
    {children}
  </Link>
)
