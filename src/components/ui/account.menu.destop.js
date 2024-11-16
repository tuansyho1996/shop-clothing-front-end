'use client'
import Link from "next/link"
import { useState, useRef, useContext } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from "@/context/context.app";
import { useRouter } from 'next/navigation'


export default function AccountMenu() {
  const [isShow, setIsShow] = useState(false)
  const { user, setUser } = useContext(AppContext)
  const router = useRouter()

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null)
    router.push('/login')
  }
  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className="flex flex-col gap-2 text-xl">
        <AccountCircleIcon fontSize='large' />
      </div>
      <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 bg-white h-3 w-[150%] `}>
      </span>
      <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 ${isShow ? 'visible' : 'hidden'}`}>
        <div className="w-[0.75rem] h-[0.75rem] bg-white border-t border-l rotate-45 transform origin-center translate-y-1/2"></div>
      </span>
      <div className={` ${isShow ? 'visible' : 'hidden'} flex gap-4 flex-col items-center font-semibold min-w-36 left-1/2 uppercase transform -translate-x-1/2 bg-white mt-3 absolute top-full border text-gray-500 shadow-lg py-4 px-2 text-xl rounded-sm `}>
        {
          user ?
            <>
              <Link href='/account' ><div className="hover:text-accent-color">{user.usr_first_name}{' '}{user.usr_last_name}</div></Link>
              <div className="cursor-pointer hover:text-accent-color" onClick={handleLogOut}>Log out</div>
            </>
            :
            <>
              <Link href='/login'>Login</Link>
              <Link href='/sign-up'>Sign up</Link>
            </>
        }
      </div>
    </div>

  )
}