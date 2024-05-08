// Layout.jsx
import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Content />
    </Box>
  );
}
