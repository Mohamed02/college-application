import { ChangeEvent, useCallback, useState } from "react";
import ChatWidget from "../components/Chat/ChatWidget";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import ChatWindow from "../components/Chat/ChatWindow";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

const Layout = () => {
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleChatWindow = useCallback(() => {
    setChatOpen((prevState) => !prevState);
  }, []);

  const toggleDarkMode = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="flex">
        <NavHeader
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        ></NavHeader>
        <main className="w-full md:w-3/4 lg:w-5xl p-5  m-auto mt-10">
          <Outlet />
          <ChatWidget onClick={toggleChatWindow} />
          <ChatWindow open={isChatOpen} onClose={toggleChatWindow} />
        </main>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
