import { redirect } from "next/navigation"

const AboutNotFound = () => {
  redirect("/#about")
}

export default AboutNotFound
