import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: "80px", md: "0" },
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: "800px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 700,
                    mb: 2,
                    background:
                      "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hi, I'm Akshat Gupta
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    color: "text.secondary",
                    mb: 4,
                  }}
                >
                  Front End Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    color: "text.secondary",
                    mb: 4,
                    maxWidth: "600px",
                  }}
                >
                  Results-driven Front End Developer with a strong foundation in
                  HTML, CSS, JavaScript, and front-end frameworks, backed by
                  over 3 years of valuable corporate experience.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#projects"
                    sx={{
                      background:
                        "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                      color: "#0a192f",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #00b8ff 30%, #64ffda 90%)",
                      },
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#contact"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        borderColor: "secondary.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    href="https://github.com/akshatgupta06"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FaGithub />}
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/akshatgupta06"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FaLinkedin />}
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "400px",
                  mx: "auto",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                    opacity: 0.3,
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/images/profile.jpg"
                  alt="Akshat Gupta"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "50%",
                    border: "4px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
