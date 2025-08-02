import { Input } from '@/components/ui/input'
import { searchBigIcon, clearIcon } from '@/assets/icons'
import React from 'react'

interface SearchInputProps {
  searchValue: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  className?: string
}

const SearchInput = ({ searchValue, onSearchChange, onClear, className }: SearchInputProps) => {
  return (
    <div className='relative'>
      <Input
        type='text'
        placeholder='Tìm kiếm...'
        value={searchValue}
        onChange={onSearchChange}
        className={`w-full h-12 !pl-12 !text-lg font-semibold rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--background)]/80 focus:ring-[color:var(--ring)] transition-all placeholder:text-lg placeholder:font-semibold px-5 ${className}`}
      />
      <img
        src={searchBigIcon}
        alt='Search Icon'
        className='absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6'
      />
      {searchValue && (
        <img
          src={clearIcon}
          alt='Clear Icon'
          className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer h-6 w-6'
          onClick={onClear}
        />
      )}
    </div>
  )
}

export { SearchInput }
