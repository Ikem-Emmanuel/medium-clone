import Link from 'next/link'
import { Button } from './Button'
import { Logo } from './Logo'

function Header() {
  return (
    <header className="border-b-[0.1px] border-b-black bg-yellow-500 text-sm">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between py-5 px-6 md:py-4 md:px-12">
        <Link href="/">
          <Logo />
        </Link>
        <div className=" flex flex-row items-center space-x-5">
          <div className="hidden items-center space-x-5 text-xs text-black md:inline-flex md:text-sm">
            <Link href="/">
              <a>Our Story</a>
            </Link>
            <Link href="/">
              <a>Membership</a>
            </Link>
            <Link href="/">
              <a>Write</a>
            </Link>
            <Link href="/">
              <a>Sign In</a>
            </Link>
          </div>
          <Button
            className={'rounded-full bg-black py-2 px-4 text-white'}
            title={'Get started'}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
