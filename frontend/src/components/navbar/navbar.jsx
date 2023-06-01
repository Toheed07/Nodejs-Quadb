import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TelegramIcon from "@mui/icons-material/Telegram";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ThemeContext from "../../themeContext/ThemeContext";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const open = Boolean(anchorEl);

  const handleInrDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInrDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      className={theme === "light" ? "light-theme" : "dark-theme"}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hodlinfo
        </Typography>
        <Button
          color="inherit"
          startIcon={<ArrowDropDownIcon />}
          onClick={handleInrDropdownClick}
        >
          INR
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleInrDropdownClose}
          onClick={handleInrDropdownClose}
        >
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
        <Button
          color="inherit"
          startIcon={<ArrowDropDownIcon />}
          onClick={handleInrDropdownClick}
        >
          Coin
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleInrDropdownClose}
          onClick={handleInrDropdownClose}
        >
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
        <Button color="inherit">Buy</Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" startIcon={<TelegramIcon />}>
          Connect with Telegram
        </Button>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
