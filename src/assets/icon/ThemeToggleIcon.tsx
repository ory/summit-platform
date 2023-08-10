import { SVGProps } from "react"
import "./ThemeToggleIcon.css"

export const ThemeToggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path
      d="M18.6481 8.45331C15.5312 9.54627 13.2961 12.5144 13.2961 16.0046C13.2961 19.4948 15.5312 22.463 18.6481 23.556C17.8193 23.8466 16.9281 24.0046 16 24.0046C11.5817 24.0046 8 20.4229 8 16.0046C8 11.5864 11.5817 8.00464 16 8.00464C16.9281 8.00464 17.8193 8.16268 18.6481 8.45331Z"
      className="z-10 fill-black stroke-black transition-colors dark:fill-transparent dark:stroke-white"
    />
    <circle
      cx="21.2961"
      cy="16.0046"
      r="8"
      className="z-10 fill-white stroke-black transition-colors dark:stroke-white"
    />
    <path
      d="M15.9934 28.0166L15.9934 31.4976"
      className="theme-toggle-bottom z-0 stroke-black transition-all dark:stroke-white"
      strokeLinecap="round"
    />
    <path
      d="M15.9934 3.99268L15.9934 0.511719"
      className="theme-toggle-top z-0 stroke-black transition-all dark:stroke-white"
      strokeLinecap="round"
    />
    <path
      d="M3.98145 16.0046H0.500488"
      className="theme-toggle-left z-0 stroke-black transition-all dark:stroke-white"
      strokeLinecap="round"
    />
    <path
      d="M7.49976 7.51074L5.03835 5.04933"
      className="theme-toggle-top-left z-0 stroke-black transition-all dark:stroke-white"
      strokeLinecap="round"
    />
    <path
      d="M7.49951 24.4983L5.0381 26.9597"
      className="theme-toggle-bottom-left z-0 stroke-black transition-all dark:stroke-white"
      strokeLinecap="round"
    />
  </svg>
)
