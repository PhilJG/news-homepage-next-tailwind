"use client"

import Image from "next/image"
import Logo from '../../public/assets/images/logo.svg'
import Menu from '../../public/assets/images/icon-menu.svg'
import Close from '../../public/assets/images/icon-menu-close.svg'

export default function Navbar() {
    return (
        <nav className='flex justify-between pt-7 pb-8 sm:px-4 lg:px-40'>
            <Image src={Logo} alt='Web3 logo' />
            <ul className='hidden md:flex space-x-10'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
            <Image src={Menu} className='md:hidden' alt="Menu" />
            <Image src={Close} className='hidden' alt="Close" />
        </nav>
    )
}