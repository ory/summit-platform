"use client"

import { LiveIndicator } from "@/app/components/live-indicator"
import { ThemeToggleIcon } from "@/assets/icon/theme-toggle-icon"
import { useIsLive } from "@/hooks/useIsLive"
import { useIsRegistered } from "@/hooks/useRegistration"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"
import { GetTicketButton } from "../components/get-ticket-button"
import UserMenu from "../components/user-menu/user-menu"
import { HERO_GET_TICKET_BUTTON_ID } from "./blocks/heroGetTicketButtonId"

export const NavigationRightHandSide = () => {
  const { data: isRegistered } = useIsRegistered()
  const navRef = useRef<HTMLDivElement>(null)
  const [isBeneathGetTicketButton, setIsBeneathGetTicketButton] =
    useState(false)
  const { setTheme, theme } = useTheme()
  const oppositeTheme = theme === "dark" ? "light" : "dark"
  const isLive = useIsLive()

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
        <div className="flex text-base font-normal leading-tight">
          {isLive ? (
            <div className={"flex items-center gap-1 uppercase"}>
              <LiveIndicator />
              Live
            </div>
          ) : (
            <span>9th Nov, 23</span>
          )}
          <span className="hidden sm:inline-block">
            <span className="text-blue-500 dark:text-rose-500">
              &nbsp;-&nbsp;
            </span>
            Munich, Germany
          </span>
        </div>
      )}
      <button onClick={toggleTheme}>
        {/*
           next-themes causes hydration warnings because it may change the theme instantly in the client.
           This issue is expected and currently (2023-08-10) there doesn't seem to be a better option than
           suppressing it. https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1664694281
        */}
        <ThemeToggleIcon
          aria-label={`Switch to ${oppositeTheme} mode`}
          suppressHydrationWarning
        />
      </button>
      <UserMenu />
    </div>
  )
}
