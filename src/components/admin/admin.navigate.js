// components/VerticalMenu.js

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

export default function Navigate() {
  return (
    <div className="h-screen w-60 bg-gray-100 shadow-md">
      <List component="nav" className="p-4">
        <Link href="/admin/products" passHref>
          <ListItem className="hover:bg-gray-200 rounded-lg">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <Link href="/admin/category" passHref>
          <ListItem className="hover:bg-gray-200 rounded-lg">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
          </ListItem>
        </Link>
        <Link href="/settings" passHref>
          <ListItem className="hover:bg-gray-200 rounded-lg">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
        <Link href="/logout" passHref>
          <ListItem className="hover:bg-gray-200 rounded-lg">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
