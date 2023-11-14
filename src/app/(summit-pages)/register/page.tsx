"use client"

import { useIsRegistered } from "@/hooks/useRegistration"
import { cn } from "@/utils/cn"
import { redirect } from "next/navigation"
import { Container } from "../../components/container"
import { dividerStyles } from "../../components/dividerStyles"
import { Wrapper } from "../../components/wrapper"
import { HubspotRegistrationForm } from "./hubspot-registration-form"

export default function RegistrationPage() {
  const { data: isRegistered } = useIsRegistered()

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
      <Container className="w-full max-w-[--ory-max-content-width]">
        <Wrapper>
          <HubspotRegistrationForm className="col-span-full" />
        </Wrapper>
      </Container>
    </main>
  )
}
