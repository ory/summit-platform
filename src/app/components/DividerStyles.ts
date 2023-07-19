import { cn } from "@/utils/cn"

export const dividerStyles = cn(
  "relative",
  "before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-6 before:bg-blue-500 dark:before:bg-rose-500",
  "after:absolute after:bottom-0 after:right-0 after:block after:h-[1px] after:w-6 after:bg-blue-500 dark:after:bg-rose-500",
)
