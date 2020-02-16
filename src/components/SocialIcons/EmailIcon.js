import * as React from 'react'
import Envelope from './assets/envelope.svg'
import Icon from './Icon'

export default function EmailIcon() {
  return (
    <Icon
      IconSvg={Envelope}
      link="mailto:teddyni19@gmail.com"
      hoverColor="#00693e"
    />
  )
}
