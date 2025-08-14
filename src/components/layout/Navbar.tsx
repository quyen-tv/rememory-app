import { useNavigation } from '@/hooks'
import { useScrollStore } from '@/store/scrollStore'

const Navbar = () => {
  const { menuItems, activeItem, handleMenuClick } = useNavigation()
  const { isScrolled } = useScrollStore()

  const navbarClass = [
    'w-full transition-all duration-500 ease-in-out px-6 fixed bottom-0 z-50',
    isScrolled ? 'bg-[color:var(--background)]/95 backdrop-blur-sm shadow-t-sm' : 'bg-background'
  ].join(' ')

  return (
    <nav className={navbarClass}>
      <ul className='flex justify-around items-center h-16'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleMenuClick(item)}
              className={`cursor-pointer w-full flex items-center px-2 text-left rounded-lg transition-colors duration-200 ${
                activeItem === item.id
                  ? 'bg-[color:var(--primary)]/30 text-[var(--sidebar-primary)]'
                  : 'bg-[color:var(--background)] text-[color:var(--foreground)] hover:bg-[color:var(--accent)]/30'
              }`}
            >
              <img src={item.icon} alt={item.label} className='w-12 h-12' />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
