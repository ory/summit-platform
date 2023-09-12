import DefaultSummitPage from "@/app/(summit-pages)/page"
import { PreviewProviders } from "@/app/(summit-pages)/preview/PreviewProviders"

export default function PreviewPage() {
  return (
    <PreviewProviders>
      <DefaultSummitPage />
    </PreviewProviders>
  )
}
