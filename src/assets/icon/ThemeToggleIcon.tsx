import { SVGProps } from "react"

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
      className="fill-black stroke-black transition-colors dark:fill-transparent dark:stroke-white"
    />
    <circle
      cx="21.2961"
      cy="16.0046"
      r="8"
      className="fill-white stroke-black transition-colors dark:stroke-white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9934 4.49268C15.7173 4.49268 15.4934 4.26882 15.4934 3.99268V0.511719C15.4934 0.235576 15.7173 0.0117188 15.9934 0.0117188C16.2696 0.0117188 16.4934 0.235576 16.4934 0.511719V3.99268C16.4934 4.26882 16.2696 4.49268 15.9934 4.49268ZM15.9934 27.5166C16.2696 27.5166 16.4934 27.7405 16.4934 28.0166V31.4976C16.4934 31.7737 16.2696 31.9976 15.9934 31.9976C15.7173 31.9976 15.4934 31.7737 15.4934 31.4976V28.0166C15.4934 27.7405 15.7173 27.5166 15.9934 27.5166ZM3.98145 16.5046C4.25759 16.5046 4.48144 16.2808 4.48144 16.0046C4.48144 15.7285 4.25759 15.5046 3.98145 15.5046H0.500488C0.224346 15.5046 0.000488281 15.7285 0.000488281 16.0046C0.000488281 16.2808 0.224346 16.5046 0.500488 16.5046H3.98145ZM7.85331 7.8643C7.65805 8.05956 7.34146 8.05956 7.1462 7.8643L4.68479 5.40289C4.48953 5.20763 4.48953 4.89104 4.68479 4.69578C4.88006 4.50052 5.19664 4.50052 5.3919 4.69578L7.85331 7.15719C8.04857 7.35245 8.04857 7.66903 7.85331 7.8643ZM7.85307 24.8518C8.04833 24.6566 8.04833 24.34 7.85307 24.1447C7.6578 23.9495 7.34122 23.9495 7.14596 24.1447L4.68455 26.6061C4.48929 26.8014 4.48929 27.118 4.68455 27.3133C4.87981 27.5085 5.19639 27.5085 5.39166 27.3133L7.85307 24.8518Z"
      className="fill-black dark:fill-white"
    />
  </svg>
)