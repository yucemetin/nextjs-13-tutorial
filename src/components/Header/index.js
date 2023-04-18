import React from 'react'
import Link from "next/link"

export default function Header() {
    return (
        <header className='flex items-center justify-between'>
            <Link href='/' className='text-2xl font-bold text-white'>
                <span>BLOG</span>
            </Link>
            <nav>
                <Link href='https://github.com/yucemetin' target='_blank'>
                    About
                </Link>
            </nav>
        </header>
    )
}
