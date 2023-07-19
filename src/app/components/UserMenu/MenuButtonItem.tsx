"use client"

import { cn } from "@/utils/cn"
import { Menu as HMenu } from "@headlessui/react"
import { Fragment, PropsWithChildren } from "react"

type MenuButtonItemProps = {
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
}

export const MenuButtonItem = ({
  onClick,
  children,
  disabled,
  href,
  className,
}: PropsWithChildren<MenuButtonItemProps>) => {
  const ButtonComponent = href ? "a" : "button"

  return (
    <HMenu.Item as={Fragment}>
      <div className="flex items-stretch gap-2 px-6 py-2 ui-active:cursor-pointer">
        <ButtonComponent
          href={href}
          disabled={disabled}
          onClick={onClick}
          className={cn(
            "group flex w-full cursor-pointer items-center justify-center gap-2 rounded px-3 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-gray-300",
            "truncate text-sm",
            "border border-transparent bg-indigo-600 text-white",
            "ui-active:border-indigo-500 ui-active:bg-white ui-active:text-indigo-500",
            className,
          )}
        >
          {children}
        </ButtonComponent>
      </div>
    </HMenu.Item>
  )
}
