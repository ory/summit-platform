import Link from "next/link"
import { getSession } from "../ory/getSession"
import { Button } from "./Button"
import { RightArrow } from "./RightArrow"

type GetTicketButtonProps = {
  className?: string
}

export const GetTicketButton = async ({ className }: GetTicketButtonProps) => {
  const session = await getSession()

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
    <Button
      as="a"
      className={className}
      href={`${process.env.ORY_CONSOLE_URL}/login?redirect_to=https://google.com`}
    >
      {getTicketButtonContent}
    </Button>
  )
}
