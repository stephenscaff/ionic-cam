import * as React from "react"

type IconProps = {
  size?: number, 
  fill?: string
}

const IconCart: React.FC<IconProps> = ({size = 24, fill = "#111820"}) => 
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      d="M23 5a.999.999 0 01.97 1.242l-2 8A1 1 0 0121 15H8a1 1 0 01-.97-.758L4.22 3H2a1 1 0 110-2h3a1 1 0 01.97.758L6.78 5H23zm-1.277 2H7.28l1.5 6h11.442l1.5-6zm-4.539 12A2.995 2.995 0 0120 17a2.995 2.995 0 11-2.816 4h-5.368a3 3 0 110-2h5.368zM8 20a1 1 0 102 0 1 1 0 00-2 0zm12 1a1 1 0 10-.001-2.001A1 1 0 0020 21z"
      fill={fill}
    />
  </svg>

export default IconCart