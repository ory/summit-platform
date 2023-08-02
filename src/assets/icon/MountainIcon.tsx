type IconProps = {
  className?: string
}

const MountainIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path
      d="M15 22.0001L19 27.0001L24 22.0001L28 28.0001L33 24.0001M6 40.0001H42L28.158 10.7761C27.7854 9.98855 27.1967 9.32305 26.4606 8.85701C25.7245 8.39097 24.8712 8.14355 24 8.14355C23.1288 8.14355 22.2755 8.39097 21.5394 8.85701C20.8033 9.32305 20.2146 9.98855 19.842 10.7761L6 40.0001Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MountainIcon
