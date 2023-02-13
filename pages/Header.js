import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
          <Link href="/">home</Link>
          <Link href="/List" as="list">list</Link>
          <Link href="/Write" as="write">write</Link>
        </nav>
      </header>
  )
}

export default Header