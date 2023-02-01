import { useContext } from 'react'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlined from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlined from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Draft'];

export const Sidebar = () => {
  const { sidemenuOpen, closeSidebar } = useContext(UIContext)

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <Divider />

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={item}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={item}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
