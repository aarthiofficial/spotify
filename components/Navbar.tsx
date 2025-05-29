'use client'

import { signOut } from 'next-auth/react'

export default function Navbar() {
  return (
    <div className="bg-zinc-900 text-white p-4 flex justify-between">
      <span>Spotify Clone</span>
      <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </div>
  )
}
