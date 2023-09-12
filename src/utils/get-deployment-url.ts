export const getDeploymentUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.host
  }
  return (
    process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL
  )
}
