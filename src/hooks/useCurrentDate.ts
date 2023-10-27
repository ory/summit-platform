import { useEffect, useState } from "react"

export const useCurrentDate = () => {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const request = requestAnimationFrame(() => {
      setNow(new Date())
    })

    return () => cancelAnimationFrame(request)
  })

  return now
}
