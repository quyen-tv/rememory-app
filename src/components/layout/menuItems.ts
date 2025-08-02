import icHouse from '@/assets/icons/ic_house.png'
import icFolder from '@/assets/icons/ic_folder.png'
import icBell from '@/assets/icons/ic_bell.png'

export interface MenuItem {
  id: string
  label: string
  icon: string
  path: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'ÔN TẬP',
    icon: icHouse,
    path: '/dashboard'
  },
  {
    id: 'library',
    label: 'THƯ VIỆN CỦA BẠN',
    icon: icFolder,
    path: '/library'
  },
  {
    id: 'notifications',
    label: 'THÔNG BÁO',
    icon: icBell,
    path: '/notifications'
  }
]
