import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { menuItems, type MenuItem } from '@/components/layout'

export const useNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname
    const item = menuItems.find((item) => currentPath.startsWith(item.path))
    return item?.id || 'dashboard'
  })

  const handleMenuClick = (item: MenuItem) => {
    setActiveItem(item.id)
    navigate(item.path)
  }

  return { menuItems, activeItem, handleMenuClick }
}
