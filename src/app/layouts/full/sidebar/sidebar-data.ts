import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'home',
    route: '/dashboard',
  },
  {
    displayName: 'Orders',
    iconName: 'list',
    route: '/extra/orders',
  },
  {
    displayName: 'Products',
    iconName: 'tag',
    route: '',
  },
  {
    displayName: 'Categories',
    iconName: 'folder',
    route: '/extra/categories',
  },
  {
    displayName: 'Customers',
    iconName: 'users',
    route: '',
  },
  {
    displayName: 'Reports',
    iconName: 'chart-bar',
    route: '',
  },
  {
    displayName: 'Coupons',
    iconName: 'star',
    route: '',
  },
  {
    displayName: 'Inbox',
    iconName: 'message',
    route: '',
  },
  {
    navCap: 'Other Information',
  },
  {
    displayName: 'Knowledge Base',
    iconName: 'help',
    route: '',
  },
  {
    displayName: 'Product Updates',
    iconName: 'award',
    route: '',
  },
  {
    navCap: 'Settings',
  },
  {
    displayName: 'Personal Settings',
    iconName: 'user',
    route: '/extra/icons',
  },
  {
    displayName: 'Global Settings',
    iconName: 'settings',
    route: '',
  },
];
