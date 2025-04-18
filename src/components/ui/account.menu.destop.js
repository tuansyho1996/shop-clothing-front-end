'use client'
import Link from "next/link"
import { useState, useRef, useContext, useEffect } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from "@/context/context.app";
import { useRouter } from 'next/navigation'


export default function AccountMenu() {
  const accountRef = useRef(null);
  const [isShow, setIsShow] = useState(false)
  const { user, setUser } = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsShow(false); // Ẩn modal search
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null)
    router.push('/login')
  }
  return (
    <div
      className="relative z-50"
      ref={accountRef}
    >
      <div className="flex flex-col gap-2 text-xl">
        <AccountCircleIcon fontSize='large'
          className="cursor-pointer text-[var(--primary-color)] hover:text-[var(--accent-color)]"
          onClick={() => setIsShow(!isShow)}

        />
      </div>
      <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 ${isShow ? 'visible' : 'hidden'}`}>
        <div className="w-[0.75rem] h-[0.75rem] bg-white border-t border-l rotate-45 transform origin-center translate-y-1/2"></div>
      </span>
      <div className={` ${isShow ? 'visible' : 'hidden'} flex gap-4 flex-col items-center min-w-36 left-1/2 capitalize transform -translate-x-1/2 bg-white mt-3 absolute top-full border text-gray-500 shadow-lg py-4 px-2 text-xl rounded-sm `}>
        {
          user ?
            <>
              <Link href='/account' ><div className="text-[var(--primary-color)] hover:text-[var(--accent-color)] font-semibold ">{user.usr_first_name}{' '}{user.usr_last_name}</div></Link>
              <div className="cursor-pointer text-[var(--primary-color)] hover:text-[var(--accent-color)] text-xs" onClick={handleLogOut}>Log out</div>
            </>
            :
            <>
              <Link href='/login'>
                <div onClick={() => setIsShow(false)} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] cursor-pointer">Login</div>
              </Link>
              <Link href='/sign-up'>
                <div onClick={() => setIsShow(false)} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] cursor-pointer">Sign up</div>
              </Link>

            </>
        }
      </div>
    </div>

  )
}