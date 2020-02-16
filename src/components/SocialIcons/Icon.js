import * as React from 'react'

export default function Icon(props) {
  const { link, IconSvg, hoverColor } = props
  return (
    <div
      css={{
        height: '52px',
        width: '52px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        transition: 'background-color 300ms',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
    >
      <a
        href={link}
        target="_void"
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconSvg height="36px" width="36px" fill="white" />
      </a>
    </div>
  )
}
