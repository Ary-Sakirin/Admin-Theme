
import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react'
import { Theme } from '../src/context/theme'

export default function Document() {

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}