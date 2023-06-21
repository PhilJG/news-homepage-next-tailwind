"use client"

import Image from "next/image"
import Logo from '../../public/assets/images/logo.svg'
import Menu from '../../public/assets/images/icon-menu.svg'
import Close from '../../public/assets/images/icon-menu-close.svg'

function NavLink({ name }) {
    return (
        <li className="hover:text-orange cursor-pointer">
            {name}
        </li>
    )
}

function MobileNav({ open, setOpen, theme }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`flex items-center justify-center filter drop-shadow-md dark:bg-black h-20`}>
                {/*logo container*/}
                <a className="text-xl font-semibold " href="/">
                    <Logo theme={theme} className='bg-cyan' />
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-2xl  my-4 dark:text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <NavLink name={'Home'} />
                </a>
                <a className="text-2xl  my-4 dark:text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>

                    <NavLink name={'New'} />
                    <a className="text-2xl  my-4 dark:text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    </a>
                    <NavLink name={'Popular'} />
                    <a className="text-2xl  my-4 dark:text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    </a>
                    <NavLink name={'Trending'} />
                </a>
                <a className="text-2xl  my-4 dark:text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <NavLink name={'Categories'} />
                </a>

            </div>
        </div >
    )
}

export default function Navbar() {
    return (
        <nav className='flex justify-between pt-7 pb-8 sm:px-4 lg:px-40  place-content place-self-center'>
            <Image src={Logo} alt='Web3 logo' className="cursor-pointer" />
            <ul className='hidden md:flex space-x-10 self-center'>
                <NavLink name={'Home'} />
                <NavLink name={'New'} />
                <NavLink name={'Popular'} />
                <NavLink name={'Trending'} />
                <NavLink name={'Categories'} />
            </ul>
            <Image src={Menu} className='md:hidden' alt="Menu" />
            <Image src={Close} className='hidden' alt="Close" />
        </nav>
    )
}