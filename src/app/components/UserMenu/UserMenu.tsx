import { getNextPlanName, Plan } from "@/app/ory/SubscriptionPlan"
import { getCurrentProjectId } from "@/app/ory/getCurrentProjectId"
import { getSubscriptionPlan } from "@/app/ory/getSubscriptionPlan"
import classNames from "classnames"
import { ArrowRight } from "tabler-icons-react"
import { getSession } from "../../ory/getSession"
import { Menu } from "./Menu"
import { MenuAvatar } from "./MenuAvatar"
import { MenuButtonItem } from "./MenuButtonItem"
import { MenuDivider } from "./MenuDivider"
import { MenuItem } from "./MenuItem"
import { MenuUser } from "./MenuUser"

type UserMenuProps = {
  openingButtonClassName?: string
}

export default async function UserMenu({
  openingButtonClassName,
}: UserMenuProps) {
  const [session, projectId, plan] = await Promise.all([
    getSession(),
    getCurrentProjectId(),
    getSubscriptionPlan(),
  ])
  const nextPlanName = getNextPlanName(plan)

  if (!session) {
    return undefined
  }

  const name: string = session.identity.traits.name ?? "unknown"
  const initials = name
    .split(" ")
    // Only interested in first and last initial
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .map((s) => s[0].toUpperCase())
    .join("")
  const email = session.identity.traits.email ?? "unknown"
  // const logout = useLogout()

  return (
    <Menu
      openingButtonClassName={classNames("font-sans", openingButtonClassName)}
      popupClassName="font-sans"
      button={<MenuAvatar text={initials} as="button" />}
    >
      <MenuUser name={name} initials={initials} email={email} />
      <MenuItem icon={"ExternalLink"} href={process.env.ORY_WEB_URL}>
        Ory Homepage
      </MenuItem>
      <MenuItem icon={"LayoutDashboard"} href={process.env.ORY_CONSOLE_URL}>
        Console
      </MenuItem>
      {projectId && (
        <MenuItem
          icon={"UserPlus"}
          href={`${process.env.ORY_CONSOLE_URL}/projects/${projectId}/settings`}
        >
          Add Collaborators
        </MenuItem>
      )}
      <MenuItem
        icon={"Adjustments"}
        href={`${process.env.ORY_CONSOLE_URL}/settings`}
      >
        Account settings
      </MenuItem>
      <MenuDivider />
      {nextPlanName && projectId && (
        <>
          <MenuButtonItem
            href={
              plan === Plan.Scale
                ? `${process.env.ORY_WEB_URL}/contact/`
                : `${process.env.ORY_CONSOLE_URL}/projects/${projectId}/billing`
            }
          >
            <span>Upgrade to {nextPlanName}</span>
            <ArrowRight size={16} />
          </MenuButtonItem>
          <MenuDivider />
        </>
      )}
      <MenuItem
        icon={"Logout"}
        type="danger"
        href={`${process.env.ORY_CONSOLE_URL}/logout?return_to=https://summit.console.ory:8080`}
      >
        Logout
      </MenuItem>
    </Menu>
  )
}
