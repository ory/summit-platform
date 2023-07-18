import useSWRImmutable from "swr/immutable"
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
  } = useSWRImmutable(email ? `registration-${email}` : null, () =>
    fetch(`/api/registration?email=${email}`).then((res) => res.json()),
    {
      onErrorRetry: (error) => {
        // Never retry on 404 as this is a valid result that will only change after user action
        if (error.status === 404) {
          return
        }
      }
    }
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
