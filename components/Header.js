import Image from 'next/image'
import { useState } from 'react'
import logo from '../assets/logo.jpg'
import Link from 'next/link'









const style = {
  wrapper: `p-4 w-screen flex justify-between items-center bg-black text-white`,
  amazonLogo: `mr-4 flex object-cover`,
  menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
  headerLogo: ` `,
  nav: `flex-1 flex justify-start items-center text-white`,
  navItemsContainer: `flex  bg-[#000000] rounded-3xl text-white`,
  navItem: `hover:bg-purple-700 px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A] text-white`,
  buttonsContainer: `flex w-1/4 justify-end items-center text-white`,
  button: `flex items-center bg-[#000000] text-white rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] text-white border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4cd6dc]`,
}




const Header = () => {

  const [selectedNav, setSelectedNav] = useState('swap')

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
      <Image
                    src={logo}
                    height={80}
                    width={80}
                    /> 
        </div>
      <div className={style.nav}>
              
        <div className={style.navItemsContainer}>
          <Link href='/'>
        <div
            onClick={() => setSelectedNav('/')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Home
          </div>
        </Link>
        <Link href='/'>
        <div
            onClick={() => setSelectedNav('dashboard')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
          Dashboard
          </div>
        </Link>
        <Link href='/create'>  
        <div
            onClick={() => setSelectedNav('create')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Create Assets
          </div>
        </Link>
        <Link href='/portal'>
        <div
            onClick={() => setSelectedNav('portal')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
           Asset Portal
          </div>
        </Link>
        <Link href='/portal'>
        <div
            onClick={() => setSelectedNav('rent')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Mint & Stake
          </div>
        </Link>   
          <Link href='/resell-asset'>  
        <div
            onClick={() => setSelectedNav('resell')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
           Upload
          </div>
          </Link>
          <Link href='/vote'>  
        <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
           Vote
          </div>
          </Link>
        </div>    
        <div className={style.buttonsContainer}>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="bg-cyan-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-purple-700">
          Connect Wallet
        </li>
      </ul>
      
          </div>
      </div>
    </div>
   
  )
}

export default Header