"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import "./HubspotRegistrationForm.scss"

const registrationFormId = "ory-summit-hubspot-registration-form"

const executeAsSoonAsPossible = (condition: () => boolean, fn: () => void) => {
  if (condition()) {
    fn()
  } else {
    requestAnimationFrame(() => executeAsSoonAsPossible(condition, fn))
  }
}

const createForm = (afterSubmitted: () => void) => {
  executeAsSoonAsPossible(
    () => Boolean((window as any)?.hbspt?.forms?.create),
    () => {
      ;(window as any).hbspt.forms.create({
        region: "eu1",
        portalId: "25092455",
        formId: "0395fe81-1e41-4a5f-97f9-2704a385a05b",
        target: `#${registrationFormId}`,
        onFormSubmitted: afterSubmitted,
      })
    },
  )
}

type HubspotRegistrationFormProps = { className?: string }

export const HubspotRegistrationForm = ({
  className,
}: HubspotRegistrationFormProps) => {
  const router = useRouter()
  useEffect(() => {
    const afterSubmitted = () => {
      router.push("see-you-soon")
    }
    createForm(afterSubmitted)
  }, [router])

  return (
    <>
      <div id={registrationFormId} className={className} />
      <script
        charSet="utf-8"
        type="text/javascript"
        src="https://js-eu1.hsforms.net/forms/embed/v2.js"
        defer
      ></script>
    </>
  )
}
