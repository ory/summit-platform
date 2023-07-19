"use client"

import { cn } from '@/utils/cn'
import { Menu as HMenu } from "@headlessui/react"
import { Fragment, PropsWithChildren } from "react"
import {
  Adjustments,
  ArrowRight,
  ExternalLink,
  LayoutDashboard,
  Logout,
  UserPlus,
} from "tabler-icons-react"

export const knownMenuItemIcons = {
  ExternalLink: ExternalLink,
  Adjustments: Adjustments,
  ArrowRight: ArrowRight,
  LayoutDashboard: LayoutDashboard,
  Logout: Logout,
  UserPlus: UserPlus,
}

type MenuItemProps = {
  icon: keyof typeof knownMenuItemIcons
  type?: "default" | "danger" | "active"
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  pill?: string
  trailing?: JSX.Element
}

const iconColor = {
  default: "text-gray-900 ui-active:text-indigo-500 ui-disabled:text-gray-300",
  danger: "text-error-500",
  active: "text-white",
}

const textColor = {
  default: "text-gray-900 ui-active:text-indigo-500 bg-transparent",
  danger: "text-gray-900 ui-active:text-error-500 bg-transparent",
  active: "bg-indigo-500 text-white ui-active:bg-indigo-700",
}

export const MenuItem = ({
  icon,
  type = "default",
  onClick,
  children,
  disabled,
  href,
  pill,
  className,
  trailing,
}: PropsWithChildren<MenuItemProps>) => {
  const pillStyle =
    "text-xs text-indigo-50 bg-indigo-500 rounded px-1 py-0.5 ml-auto"
  const Icon = knownMenuItemIcons[icon]

  const content = (
    <>
      <span className="flex w-full items-center gap-x-2 truncate px-2 py-2.5 text-sm">
        <Icon size={16} className={iconColor[type]} />
        {children}
        {pill && <div className={pillStyle}>{pill}</div>}
      </span>
      {trailing}
    </>
  )

  if (href) {
    return (
      <HMenu.Item as={Fragment}>
        <a
          href={href}
          className={cn(
            "group flex cursor-pointer items-center justify-between px-4 py-2 ui-active:bg-gray-50 ui-disabled:cursor-not-allowed ui-disabled:text-gray-300",
            textColor[type],
            className,
          )}
        >
          {content}
        </a>
      </HMenu.Item>
    )
  }

  const Component = onClick ? "button" : "div"
  return (
    <HMenu.Item
      as={Component}
      disabled={disabled}
      className={cn(
        "group flex w-full cursor-pointer items-center justify-between px-4 py-2 ui-active:bg-gray-50 ui-disabled:cursor-not-allowed ui-disabled:text-gray-300",
        textColor[type],
        className,
      )}
      onClick={onClick}
    >
      {content}
    </HMenu.Item>
  )
}
