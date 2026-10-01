"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import Link from "next/link"
import { Button } from "./button"
import { RightArrow } from "./right-arrow"

type GetTicketButtonProps = {
  className?: string
  id?: string
}

export const GetTicketButton = ({ className, id }: GetTicketButtonProps) => {
  const { data: isRegistered } = useIsRegistered()

  if (isRegistered) {
    return null
  }

  return (
    <Button as={Link} id={id} href="/register" className={className}>
      <RightArrow className="md:hidden" />
      <span className="hidden text-sm leading-none md:inline-block">
        Get your ticket
      </span>
      <span className="text-sm leading-none md:hidden">Ticket</span>
    </Button>
  )
}
