"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import { useSession } from "@/hooks/useSession"
import Link from "next/link"
import { Button } from "./Button"
import { ButtonWithRedirectTo } from "./ButtonWithRedirectTo"
import { RightArrow } from "./RightArrow"

type GetTicketButtonProps = {
  className?: string
}

export const GetTicketButton = ({ className }: GetTicketButtonProps) => {
  const { data: session } = useSession()
  const { data: isRegistered } = useIsRegistered()

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
    <ButtonWithRedirectTo
      as="a"
      className={className}
      href={`${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/login`}
    >
      {getTicketButtonContent}
    </ButtonWithRedirectTo>
  )
}
