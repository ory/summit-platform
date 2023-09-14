export const getDeploymentBaseUrl = () => {
  if (typeof window !== "undefined") {
    let result = window.location.origin

    if (window.location.pathname.startsWith("/preview")) {
      result += "/preview"
    }

    return result
  }
  return (
    "https://" +
    (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ??
      process.env.NEXT_PUBLIC_VERCEL_URL)
  )
}
