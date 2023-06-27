/* eslint-disable react/display-name */
import classNames from "classnames"
import { ElementType, forwardRef, ReactNode } from "react"

// Copied from console v2

const avatarSize = {
  base: "h-9 w-9",
  lg: "h-10 w-10",
  xl: "h-14 w-14",
} as const

export type MenuAvatarProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      text?: string
      onClick?: () => void
      size?: keyof typeof avatarSize
      className?: string
    }
  >

export const MenuAvatar: <C extends ElementType = "div">(
  props: MenuAvatarProps<C>,
) => ReactNode | null = forwardRef(
  <C extends ElementType = "div">(
    {
      size = "base",
      text,
      onClick,
      className,
      as,
      ...rest
    }: MenuAvatarProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = as || "div"

    return (
      <Component
        tabIndex={0}
        className={classNames(
          "inline-flex items-center justify-center rounded-full bg-indigo-500 ring-1 ring-white ",
          as === "button" &&
            "hover:bg-indigo-400 focus:bg-indigo-500 focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-cyan-300",
          avatarSize[size],
          className,
        )}
        {...rest}
        onClick={onClick}
        ref={ref}
      >
        <p className="pointer-events-none text-sm text-white">{text}</p>
      </Component>
    )
  },
)
