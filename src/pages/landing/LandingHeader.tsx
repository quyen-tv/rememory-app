import logo from '@/assets/logo/logo.png'

type LandingHeaderProps = {
  isScrolled: boolean
  isMobile: boolean
}

const LandingHeader = ({ isScrolled, isMobile }: LandingHeaderProps) => {
  const headerClass = [
    'w-full transition-all duration-500 ease-in-out',
    isScrolled ? 'sticky top-0 z-50 bg-[color:var(--background)]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  ].join(' ')

  return (
    <header className={headerClass}>
      <div
        className={`flex ${isMobile ? 'justify-center' : 'justify-between'} items-center px-4 md:px-8 max-w-screen-xl mx-auto w-full`}
      >
        <div className='flex items-center gap-2 md:gap-4'>
          <img
            src={logo}
            alt='Rememory logo'
            className='h-12 md:h-20 w-auto max-w-[140px] md:max-w-[220px] object-contain drop-shadow-md'
          />
        </div>
        {!isMobile && (
          <div className='text-gray-400 text-sm md:text-base font-semibold'>
            <span className='cursor-pointer hover:text-gray-600 transition-colors duration-200'>
              NGÔN NGỮ HIỂN THỊ: <b>TIẾNG VIỆT</b> ▼
            </span>
          </div>
        )}
      </div>
      <div
        className={`h-px bg-[color:var(--border)] transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
    </header>
  )
}

export default LandingHeader
