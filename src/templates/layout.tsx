import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from '../templates/header'
import Footer from './footer'

// NOTE https://github.com/FortAwesome/react-fontawesome/issues/284
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


type Props = {
  children?: ReactNode
  title?: string
}


const Layout = ({ children, title = 'himkt.github.io' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png"></link>
      <style>{dom.css()}</style>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
