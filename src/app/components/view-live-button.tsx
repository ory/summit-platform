"use client"

import { useLoginUrl } from "@/hooks/useLoginUrl"
import { useSession } from "@/hooks/useSession"
import Link from "next/link"
import { Button } from "./button"

type ViewLiveButtonProps = {
  className?: string
  id?: string
}

export const ViewLiveButton = ({ className, id }: ViewLiveButtonProps) => {
  const { data: session } = useSession()
  const loginUrl = useLoginUrl()

  return session ? (
    <Button as={Link} id={id} href="/live" className={className}>
      Watch live stream
    </Button>
  ) : (
    <Button as={"a"} id={id} className={className} href={loginUrl}>
      Register to watch live
    </Button>
  )
}
