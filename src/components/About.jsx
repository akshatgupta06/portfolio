import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0a192f 0%, #112240 100%)",
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                    borderRadius: "20px",
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
                    maxWidth: "500px",
                    height: "auto",
                    borderRadius: "20px",
                    border: "4px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  background:
                    "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                Hello! I'm Akshat, a passionate Front End Developer with a keen
                eye for creating beautiful and functional web experiences. With
                over 3 years of experience in the field, I've developed a strong
                foundation in modern web technologies and best practices.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                My journey in web development began with a curiosity about how
                websites work, which led me to dive deep into HTML, CSS, and
                JavaScript. Since then, I've expanded my skillset to include
                modern frameworks and libraries like React, Material-UI, and
                more.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                I believe in writing clean, maintainable code and creating
                intuitive user interfaces that provide exceptional user
                experiences. When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge with the developer community.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
