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
        formId: "2969f97f-e83f-4c66-843b-12ad35b17133",
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
