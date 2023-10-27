import { TalkDetails } from "@/app/components/talk-details"
import { useCurrentTalk } from "@/hooks/useCurrentTalk"
import { cn } from "@/utils/cn"

export const CurrentTalk = ({ className }: { className?: string }) => {
  const currentTalk = useCurrentTalk()

  return (
    <TalkDetails
      talk={currentTalk}
      withoutDividers
      asRow
      className={cn("gap-4", className)}
      timeClassName="text-base font-normal leading-tight"
      withReadMore
      noSectionPadding
      hideShareLegend
    />
  )
}
