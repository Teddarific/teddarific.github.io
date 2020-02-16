import * as React from 'react'
import WebFont from 'webfontloader'

import RobinhoodSection from './components/RobinhoodSection'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

export default function App() {
  return <RobinhoodSection />
}
