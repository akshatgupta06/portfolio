import { Box, Container, Typography, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: "#0a192f",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © {new Date().getFullYear()} Akshat Gupta. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                href="https://github.com/akshatgupta06"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              >
                <FaGithub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/akshatgupta06"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              >
                <FaLinkedin />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
