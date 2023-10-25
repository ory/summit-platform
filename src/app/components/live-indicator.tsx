import { cn } from "@/utils/cn"
import { useEffect, useState } from "react"

export const LiveIndicator = ({ className }: { className?: string }) => {
  const [isRed, setIsRed] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRed(!isRed)
    }, 1_000)

    return () => clearTimeout(timeout)
  }, [isRed])

  return (
    <span
      className={cn(
        {
          "text-red-500": isRed,
        },
        className,
      )}
    >
      •
    </span>
  )
}
