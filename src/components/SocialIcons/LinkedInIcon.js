import * as React from 'react'
import LinkedIn from './assets/linkedin.svg'
import Icon from './Icon'

export default function EmailIcon() {
  return (
    <Icon
      IconSvg={LinkedIn}
      link="https://www.linkedin.com/in/teddy-ni/"
      hoverColor="#0e76a8"
    />
  )
}
