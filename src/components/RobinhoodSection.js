import * as React from 'react'
import {
  EmailIcon,
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
} from './SocialIcons'

export default function RobinhoodSection() {
  return (
    <div
      css={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
    >
      <Section>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PersonalInfo />
          <SocialMediaLinks />
        </div>
      </Section>
      <Section>
        <div> Bridge </div>
      </Section>
    </div>
  )
}

function Section({ children }) {
  return (
    <div
      css={{
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21CE99',
      }}
    >
      {children}
    </div>
  )
}

function PersonalInfo() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Nunito',
      }}
    >
      <div
        css={{
          fontSize: 72,
        }}
      >
        TEDDY NI
      </div>
      <div
        css={{
          fontSize: 32,
        }}
      >
        SOFTWARE ENGINEER
      </div>
      <div
        css={{
          fontSize: 32,
        }}
      >
        @robinhood
      </div>
    </div>
  )
}

function SocialMediaLinks() {
  return (
    <div
      css={{
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-around',
        width: '300px',
      }}
    >
      <EmailIcon />
      <InstagramIcon />
      <GithubIcon />
      <LinkedInIcon />
    </div>
  )
}
