"use client"

import { useLoginUrl } from "@/hooks/useLoginUrl"
import { useIsRegistered } from "@/hooks/useRegistration"
import { useSession } from "@/hooks/useSession"
import { cn } from "@/utils/cn"
import { redirect } from "next/navigation"
import { Container } from "../components/container"
import { dividerStyles } from "../components/dividerStyles"
import { Wrapper } from "../components/wrapper"
import { HubspotRegistrationForm } from "./hubspot-registration-form"

export default function RegistrationPage() {
  const { data: session, isLoading: sessionIsLoading } = useSession()
  const { data: isRegistered } = useIsRegistered()
  const loginUrl = useLoginUrl()

  if (!sessionIsLoading && !session?.active) {
    redirect(loginUrl)
  }

  if (isRegistered) {
    redirect("/see-you-soon")
  }

  return (
    <main
      className={cn(
        dividerStyles,
        "flex flex-1 flex-col items-center justify-end p-6 sm:p-12 md:justify-start md:py-24 lg:p-24",
      )}
    >
      <Container className="w-full max-w-[1344px]">
        <Wrapper>
          <HubspotRegistrationForm className="col-span-full" />
        </Wrapper>
      </Container>
    </main>
  )
}
