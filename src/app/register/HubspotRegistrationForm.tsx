"use client"

import { useEffect } from "react"
import "./HubspotRegistrationForm.scss"

const registrationFormId = "ory-summit-hubspot-registration-form"

const createForm = () => {
  ;(window as any).hbspt.forms.create({
    region: "eu1",
    portalId: "25092455",
    formId: "2969f97f-e83f-4c66-843b-12ad35b17133",
    target: `#${registrationFormId}`,
  })
}

type HubspotRegistrationFormProps = { className?: string }

export const HubspotRegistrationForm = ({
  className,
}: HubspotRegistrationFormProps) => {
  useEffect(createForm, [])

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
