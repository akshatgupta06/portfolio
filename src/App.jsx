import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#64ffda",
      },
      secondary: {
        main: "#00b8ff",
      },
      background: {
        default: isDarkMode ? "#0a192f" : "#f5f5f5",
        paper: isDarkMode ? "#112240" : "#ffffff",
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#000000",
        secondary: isDarkMode
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(0, 0, 0, 0.7)",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            padding: "8px 24px",
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Box component="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
