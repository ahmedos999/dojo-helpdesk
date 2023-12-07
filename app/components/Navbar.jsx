import React from 'react'
import Link from 'next/link'
import logo from './dojo-logo.png'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>
      <Image
      src={logo}
      alt='Dojo helpdesk logo'
      width={70}
      quality={100}
      placeholder='blur'>

      </Image>
        <h1>
          Dojo helpdesk
        </h1>
        <Link href="/">Dashord</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
  )
}
