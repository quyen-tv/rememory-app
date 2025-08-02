import { useNavigation } from '@/hooks'

const Navbar = () => {
  const { menuItems, activeItem, handleMenuClick } = useNavigation()

  return (
    <nav className='fixed bottom-0 left-0 w-full bg-[color:var(--background)]/95 border-t md:hidden z-50'>
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
