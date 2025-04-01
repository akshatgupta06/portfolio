import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Container,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaMoon, FaSun } from "react-icons/fa";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: isScrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px",
              }}
            >
              AKSHAT GUPTA
            </Typography>
          </motion.div>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "rgba(10, 25, 47, 0.95)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleMenuClose}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "text.primary",
                      "&:hover": {
                        color: "#64ffda",
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{ display: "flex", alignItems: "center", gap: 3 }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "text.primary",
                    position: "relative",
                    "&:hover": {
                      color: "#64ffda",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#64ffda",
                      transition: "width 0.3s ease",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Button>
              ))}
              <IconButton
                onClick={() => setIsDarkMode(!isDarkMode)}
                color="inherit"
                sx={{
                  ml: 2,
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDarkMode ? "moon" : "sun"}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                  </motion.div>
                </AnimatePresence>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
