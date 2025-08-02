import { Avatar, AvatarFallback, AvatarImage, SearchInput } from '@/components/ui'
import { useAuthStore } from '@/store/authStore'
import logo from '@/assets/logo/logo.png'
import { useState } from 'react'

type HeaderProps = {
  isScrolled: boolean
  isMobile: boolean
}

const Header = ({ isScrolled, isMobile }: HeaderProps) => {
  const user = useAuthStore((state) => state.user)
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClearInput = () => {
    setSearchValue('')
  }

  const headerClass = [
    'w-full transition-all duration-500 ease-in-out px-6',
    isScrolled ? 'sticky top-0 z-50 bg-[color:var(--background)]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  ].join(' ')

  return (
    <header className={headerClass}>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-2 md:gap-4'>
          <img
            src={logo}
            alt='Rememory logo'
            className='h-12 md:h-20 w-auto max-w-[140px] md:max-w-[220px] object-contain drop-shadow-md'
          />
        </div>
        <div className={`flex-1 max-w-md mx-8 ${isMobile ? 'hidden' : 'block'}`}>
          <SearchInput searchValue={searchValue} onSearchChange={handleInputChange} onClear={handleClearInput} />
        </div>
        <div className='flex items-center'>
          <Avatar className='h-10 w-10'>
            <AvatarImage
              src={user?.photoURL || 'https://github.com/shadcn.png'}
              alt={user?.displayName || 'User Avatar'}
            />
            <AvatarFallback>{user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {isMobile && (
        <div className='w-full py-4'>
          <SearchInput searchValue={searchValue} onSearchChange={handleInputChange} onClear={handleClearInput} />
        </div>
      )}
    </header>
  )
}

export default Header
