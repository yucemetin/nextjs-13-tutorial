import React from 'react'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className='flex items-center justify-center text-sm font-normal'>
            <h4>Built with Next.js and 💞, ©<Link href='https://github.com/yucemetin' target='_blank'><span className='text-red-300'> Metin Yüce</span> </Link></h4>
        </footer>
    )
}
