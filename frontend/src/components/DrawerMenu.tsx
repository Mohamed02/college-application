import Box from "@mui/material/Box";

import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";

import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DrawerMenuProps } from "../types";
import { iconMap } from "./Icons";

const DrawerMenu = ({ open, onClose }: DrawerMenuProps) => {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", icon: iconMap.home, path: "/" },
    { label: "Application", icon: iconMap.issues, path: "/application" },
    { label: "Tutorial", icon: iconMap.report, path: "/tutorial" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose(false);
  };
  return (
    <Drawer
      open={open}
      onClose={() => {
        onClose(false);
      }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              disablePadding
              onClick={() => {
                handleNavigation(item.path);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigation(item.path);
                }
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default DrawerMenu;
