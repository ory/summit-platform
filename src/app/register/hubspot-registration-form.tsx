"use client"

import { useRegistration } from "@/hooks/useRegistration"
import { useSession } from "@/hooks/useSession"
import { Session } from "@ory/client"
import { useRouter } from "next/navigation"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import "./hubspot-registration-form.scss"

const registrationFormId = "ory-summit-hubspot-registration-form"

const executeAsSoonAsPossible = (condition: () => boolean, fn: () => void) => {
  if (condition()) {
    fn()
  } else {
    requestAnimationFrame(() => executeAsSoonAsPossible(condition, fn))
  }
}

const createForm = (afterSubmitted: () => void, session: Session) => {
  executeAsSoonAsPossible(
    () => Boolean((window as any)?.hbspt?.forms?.create),
    () => {
      ;(window as any).hbspt.forms.create({
        region: "eu1",
        portalId: "25092455",
        formId: "0395fe81-1e41-4a5f-97f9-2704a385a05b",
        target: `#${registrationFormId}`,
        onFormSubmitted: afterSubmitted,
        onFormReady: (form: HTMLFormElement) => {
          const emailInput =
            form.querySelector<HTMLInputElement>('[name="email"]')
          const firstNameInput =
            form.querySelector<HTMLInputElement>('[name="firstname"]')
          const lastNameInput =
            form.querySelector<HTMLInputElement>('[name="lastname"]')
          const { email, name }: { email: string; name: string } =
            session.identity.traits
          const names = name.split(" ")
          const lastName = names.at(-1)
          const firstNames = names.slice(0, -1).join(" ")

          if (emailInput) {
            emailInput.value = email
            emailInput.dispatchEvent(new Event("input"))
          }
          if (firstNameInput) {
            firstNameInput.value = firstNames
            firstNameInput.dispatchEvent(new Event("input"))
          }
          if (lastNameInput) {
            lastNameInput.value = lastName ?? ""
            lastNameInput.dispatchEvent(new Event("input"))
          }
        },
      })
    },
  )
}

type HubspotRegistrationFormProps = { className?: string }

export const HubspotRegistrationForm = ({
  className,
}: HubspotRegistrationFormProps) => {
  const router = useRouter()
  const { data: session } = useSession()
  const { mutate: mutateRegistration } = useRegistration()

  const mutateRegistrationRef = useRef(mutateRegistration)
  mutateRegistrationRef.current = mutateRegistration

  const [formHasRendered, setFormHasRendered] = useState(false)
  useEffect(() => {
    const afterSubmitted = () => {
      mutateRegistrationRef.current()
      router.push("see-you-soon")
    }

    if (!formHasRendered && session) {
      createForm(afterSubmitted, session)
      setFormHasRendered(true)
    }
  }, [router, formHasRendered, session])

  return (
    <>
      <div id={registrationFormId} className={className} />
      <Script
        charSet="utf-8"
        type="text/javascript"
        src="https://js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
      ></Script>
    </>
  )
}
