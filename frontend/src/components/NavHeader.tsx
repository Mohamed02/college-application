import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DrawerMenu from "./DrawerMenu";
import { Switch } from "@mui/material";
type NavHeaderProps = {
  toggleDarkMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
};
const NavHeader = ({ darkMode, toggleDarkMode }: NavHeaderProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <MenuIcon
            color="inherit"
            role="button"
            className="cursor-pointer"
            aria-label="Open menu"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleDrawer(true);
              }
            }}
            onClick={() => {
              toggleDrawer(true);
            }}
          ></MenuIcon>
          <DrawerMenu
            open={open}
            onClose={() => {
              toggleDrawer(false);
            }}
          ></DrawerMenu>
          <Typography variant="h6" component="div" className="grow text-center">
            Publicis Engineering College
          </Typography>
          <div>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavHeader;
