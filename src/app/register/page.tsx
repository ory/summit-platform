import classNames from "classnames"
import { redirect } from "next/navigation"
import { Container } from "../components/Container"
import { dividerStyles } from "../components/DividerStyles"
import { Wrapper } from "../components/Wrapper"
import { getIsRegistered } from "../hubspot/api"
import { HubspotRegistrationForm } from "./HubspotRegistrationForm"

export default async function RegistrationPage() {
  const isRegistered = await getIsRegistered()

  if (isRegistered) {
    redirect("/see-you-soon")
  }

  return (
    <main
      className={classNames(
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
