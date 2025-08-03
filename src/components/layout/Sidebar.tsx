import { useNavigation } from '@/hooks'

const Sidebar = () => {
  const { menuItems, activeItem, handleMenuClick } = useNavigation()

  return (
    <aside className='bg-[var(--background)]/95 w-64 min-h-screen'>
      <nav className='p-2'>
        <ul className='space-y-2'>
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
                <img src={item.icon} alt={item.label} className='w-12 h-12 mr-3' />
                <span className='text-base font-bold'>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
