'use client'

import React from 'react';
import _ from 'lodash'

export default function Home() {

  return (
    <main className='relative h-screen'>
      <h1>Hello world</h1>
      <button onClick={async() => {
        const _ = (await import('lodash')).default
        const users = [
          { name: 'c'},
          { name: 'a'},
          { name: 'b'}
        ]

        const sorted = _.sortBy(users, 'name')
        console.log(sorted)
      }}>Show</button>
    </main>
  )
}

// export const metadata = {
//   title: 'Home',
//   description: 'Home page',
// }