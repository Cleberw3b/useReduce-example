import { ReactNode } from 'react'
import Head from 'next/head'
import Nav from "./nav"
import Footer from "./footer"

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => (
  <>
    <Head>
      <title>Curadoria @nossovoto</title>
    </Head>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout
