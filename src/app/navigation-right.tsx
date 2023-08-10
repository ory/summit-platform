"use client"

import { ThemeToggleIcon } from "@/assets/icon/ThemeToggleIcon"
import { useIsRegistered } from "@/hooks/useRegistration"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"
import { HERO_GET_TICKET_BUTTON_ID } from "./blocks/heroGetTicketButtonId"
import { GetTicketButton } from "./components/get-ticket-button"
import UserMenu from "./components/user-menu/user-menu"

export const NavigationRightHandSide = () => {
  const { data: isRegistered } = useIsRegistered()
  const navRef = useRef<HTMLDivElement>(null)
  const [isBeneathGetTicketButton, setIsBeneathGetTicketButton] =
    useState(false)
  const { setTheme, theme } = useTheme()
  const oppositeTheme = theme === "dark" ? "light" : "dark"

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

  const toggleTheme = useCallback(() => {
    setTheme(oppositeTheme)
  }, [oppositeTheme, setTheme])

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
      <button onClick={toggleTheme}>
        <ThemeToggleIcon aria-label={`Switch to ${oppositeTheme} mode`} />
      </button>
      <UserMenu />
    </div>
  )
}
