import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { purple } from "@mui/material/colors";
import SettingsIcon from "@mui/icons-material/Settings";
import { ListItemButton } from "@mui/material";

export default function LogoBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ color: purple }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search God's Word
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ width: 1 / 2 }}
      >
        <List>
          {/* Add your drawer items here */}
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Settings" />
            <SettingsIcon sx={{ ml: 1 }} />
          </ListItemButton>
          {/* Add more items as needed */}
        </List>
      </Drawer>
    </Box>
  );
}
