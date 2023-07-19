"use client"

import { useIsRegistered, useRegistration } from "@/hooks/useRegistration"
import { useEffect, useRef, useState } from "react"
import { HERO_GET_TICKET_BUTTON_ID } from "./blocks/heroGetTicketButtonId"
import { GetTicketButton } from "./components/GetTicketButton"
import UserMenu from "./components/UserMenu/UserMenu"

export const NavigationRightHandSide = () => {
  const { data: isRegistered } = useIsRegistered()
  const navRef = useRef<HTMLDivElement>(null)
  const [isBeneathGetTicketButton, setIsBeneathGetTicketButton] =
    useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroGetTicketButton = document.getElementById(
        HERO_GET_TICKET_BUTTON_ID,
      )
      const nav = navRef.current

      if (heroGetTicketButton && nav) {
        const navBottom = nav.getBoundingClientRect().bottom
        const buttonTop = heroGetTicketButton.getBoundingClientRect().top
        setIsBeneathGetTicketButton(navBottom >= buttonTop)
      }
    }

    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={navRef} className="flex shrink-0 items-center gap-4">
      {!isRegistered && isBeneathGetTicketButton ? (
        <GetTicketButton />
      ) : (
        <div className="text-base font-normal leading-tight">
          <span className="">9th Nov, 23</span>
          <span className="hidden sm:inline-block">
            <span className="text-blue-500 dark:text-rose-500">
              &nbsp;-&nbsp;
            </span>
            Munich, Germany
          </span>
        </div>
      )}
      <UserMenu />
    </div>
  )
}
