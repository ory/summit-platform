"use client"

/* eslint-disable react/display-name */
import { Menu as HMenu } from "@headlessui/react"
import classNames from "classnames"
import { PropsWithChildren, ReactNode, useState } from "react"
import { usePopper } from "react-popper"

// Copied & slightly adapted from console v2

export type MenuProps = {
  gap?: number
  button: ReactNode
  align?: "start" | "end"
  openingButtonClassName?: string
  popupClassName?: string
}

export const Menu = ({
  children,
  button,
  gap = 28,
  align = "end",
  openingButtonClassName,
  popupClassName,
}: PropsWithChildren<MenuProps>) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: `bottom-${align}`,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, gap],
        },
      },
    ],
  })

  return (
    <HMenu>
      <HMenu.Button
        as="div"
        ref={setReferenceElement}
        className={openingButtonClassName}
      >
        {button}
      </HMenu.Button>
      <HMenu.Items
        ref={setPopperElement}
        className={classNames(
          "absolute z-40 min-w-[300px] overflow-hidden rounded-lg bg-white py-2 shadow-xl ring-1 ring-gray-200",
          popupClassName,
        )}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
      </HMenu.Items>
    </HMenu>
  )
}
