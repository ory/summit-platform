export const getDeploymentOrigin = () => {
  if (typeof window !== "undefined") {
    return window.location.origin
  }
  return (
    "https://" +
    (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ??
      process.env.NEXT_PUBLIC_VERCEL_URL)
  )
}
