import useSWR from "swr"
import { useSession } from "./useSession"

export const useRegistration = () => {
  const {
    isLoading: isSessionLoading,
    error: sessionError,
    data: session,
  } = useSession()
  const email: string | null | undefined = session?.identity.traits?.email

  const {
    isLoading: isRegistrationLoading,
    data: registration,
    error: registrationError,
  } = useSWR(email ? `registration-${email}` : null, () =>
    fetch(`/api/registration?email=${email}`).then((res) => res.json()),
  )

  return {
    isLoading: isSessionLoading || isRegistrationLoading,
    data: registration,
  }
}

export const useIsRegistered = () => {
  const result = useRegistration()
  return {
    ...result,
    data: Boolean(result.data),
  }
}
