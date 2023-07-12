"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import { useSession } from "@/hooks/useSession"
import { useWithRedirect } from "@/hooks/useWithRedirect"
import Link from "next/link"
import { Button } from "./Button"
import { RightArrow } from "./RightArrow"

type GetTicketButtonProps = {
  className?: string
}

export const GetTicketButton = ({ className }: GetTicketButtonProps) => {
  const { data: session } = useSession()
  const { data: isRegistered } = useIsRegistered()
  const loginUrl = useWithRedirect(
    `${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/login`,
    "redirectTo",
  )

  if (isRegistered) {
    return null
  }

  const getTicketButtonContent = (
    <>
      <RightArrow className="md:hidden" />
      <span className="hidden text-sm leading-none md:inline-block">
        Get your ticket
      </span>
    </>
  )

  return session ? (
    <Button as={Link} href="/register" className={className}>
      {getTicketButtonContent}
    </Button>
  ) : (
    <a className={className} href={loginUrl}>
      {getTicketButtonContent}
    </a>
  )
}
