import {
  RegistrationResponse,
  RegistrationResponseType,
} from "@/app/api/registration/registration-responses"
import useSWRImmutable from "swr/immutable"
import { useSession } from "./useSession"

export const useRegistration = () => {
  const {
    isLoading: isSessionLoading,
    error: sessionError,
    data: session,
  } = useSession()
  const identityId = session?.identity.id

  const {
    isLoading: isRegistrationLoading,
    data: registration,
    error: registrationError,
    mutate: mutateRegistration,
  } = useSWRImmutable(
    identityId ? `registration-${identityId}` : null,
    () =>
      fetch(`/api/registration?identityId=${identityId}`).then((res) =>
        res.json(),
      ),
    {
      onErrorRetry: (error) => {
        // Never retry on 404 as this is a valid result that will only change after user action
        if (error.status === 404) {
          return
        }
      },
    },
  )

  return {
    isLoading: isSessionLoading || isRegistrationLoading,
    data: registration as RegistrationResponse | undefined,
    mutate: mutateRegistration,
  }
}

export const useIsRegistered = () => {
  const result = useRegistration()
  return {
    ...result,
    data: result.data?.type === RegistrationResponseType.REGISTERED,
  }
}
