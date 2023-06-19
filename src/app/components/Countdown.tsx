"use client"

import classNames from "classnames"
import { useEffect, useState } from "react"
import { RightArrow } from "./RightArrow"

type CountdownProps = {
  className?: string
  targetDate: string
}

const getDelta = (targetDate: string) => {
  const now = new Date().valueOf()
  const target = new Date(targetDate).valueOf()
  const delta = target - now
  const totalSeconds = Math.floor(delta / 1_000)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const hours = totalHours % 24
  const days = Math.floor(totalHours / 24)

  return { days, hours, minutes, seconds }
}

const toTwoDigits = (n: number) => n.toString().padStart(2, "0")

export const Countdown = ({ className, targetDate }: CountdownProps) => {
  const [{ days, hours, minutes, seconds }, setDelta] = useState(
    getDelta(targetDate),
  )

  useEffect(() => {
    const request = requestAnimationFrame(() => setDelta(getDelta(targetDate)))

    return () => cancelAnimationFrame(request)
  })

  return (
    <div
      className={classNames(
        "flex max-w-max items-center text-4xl leading-tight",
        className,
      )}
    >
      <div className="absolute -ml-6 flex h-full items-center">
        <RightArrow
          width={15}
          height={12}
          className="text-blue-500 dark:text-rose-500"
        />
      </div>
      <div>
        {toTwoDigits(days)}:{toTwoDigits(hours)}:{toTwoDigits(minutes)}:
        <span className="text-blue-500 dark:text-rose-500">
          {toTwoDigits(seconds)}
        </span>
      </div>
    </div>
  )
}
