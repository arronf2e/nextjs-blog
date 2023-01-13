import React from 'react'
import useSWR from 'swr'
import Footer from './footer'
import Navbar from './navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { data, error } = useSWR('/api/navigation')
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
