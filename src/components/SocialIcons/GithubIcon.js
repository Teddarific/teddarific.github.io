import * as React from 'react'
import Github from './assets/github.svg'
import Icon from './Icon'

export default function EmailIcon() {
  return (
    <Icon
      IconSvg={Github}
      link="https://github.com/Teddarific"
      hoverColor="black"
    />
  )
}
