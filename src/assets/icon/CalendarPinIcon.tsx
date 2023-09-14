import { FC, SVGProps } from "react"

const CalendarPinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M25 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V14C8 12.9391 8.42143 11.9217 9.17157 11.1716C9.92172 10.4214 10.9391 10 12 10H36C37.0609 10 38.0783 10.4214 38.8284 11.1716C39.5786 11.9217 40 12.9391 40 14V22H8M32 6V14M38 36V36.02M16 6V14M42.242 40.242C43.0813 39.403 43.6529 38.3339 43.8846 37.1699C44.1162 36.006 43.9975 34.7995 43.5434 33.703C43.0894 32.6066 42.3203 31.6694 41.3336 31.01C40.3469 30.3507 39.1868 29.9987 38 29.9987C36.8132 29.9987 35.6531 30.3507 34.6664 31.01C33.6797 31.6694 32.9106 32.6066 32.4566 33.703C32.0025 34.7995 31.8838 36.006 32.1154 37.1699C32.3471 38.3339 32.9187 39.403 33.758 40.242C34.594 41.08 36.008 42.332 38 44C40.102 42.22 41.518 40.968 42.242 40.242Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CalendarPinIcon
