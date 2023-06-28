import Link from "next/link"
import { getIsRegistered } from "../hubspot/api"
import { getSession } from "../ory/getSession"
import { Button } from "./Button"
import { ButtonWithRedirectTo } from "./ButtonWithRedirectTo"
import { RightArrow } from "./RightArrow"

type GetTicketButtonProps = {
  className?: string
}

export const GetTicketButton = async ({ className }: GetTicketButtonProps) => {
  const session = await getSession()
  const isRegistered = await getIsRegistered()

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
      href={`${process.env.ORY_CONSOLE_URL}/login`}
    >
      {getTicketButtonContent}
    </ButtonWithRedirectTo>
  )
}
