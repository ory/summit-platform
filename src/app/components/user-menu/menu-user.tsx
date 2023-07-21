"use client"

import { Menu as HMenu } from "@headlessui/react"
import { Fragment } from "react"
import { MenuAvatar } from "./menu-avatar"

type MenuUserProps = {
  name: string
  email: string
  initials: string
}

export const MenuUser = ({ name, email, initials }: MenuUserProps) => {
  return (
    <HMenu.Item as={Fragment} disabled>
      <div className="pointer-events-auto mb-2 flex cursor-default gap-x-2 px-4 py-2 hover:bg-gray-50">
        <MenuAvatar text={initials} />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>
    </HMenu.Item>
  )
}
