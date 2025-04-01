import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: "Message sent successfully!",
      severity: "success",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "imakshat06@gmail.com",
      link: "mailto:imakshat06@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 6388258368",
      link: "tel:+916388258368",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Gurugram, India 122001",
      link: "https://maps.google.com",
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0a192f 0%, #112240 100%)",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 8,
              background: "linear-gradient(45deg, #64ffda 30%, #00b8ff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                I'm always open to new opportunities and collaborations. Whether
                you have a question or just want to say hi, feel free to reach
                out!
              </Typography>
              <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
                <Button
                  href="https://github.com/akshatgupta06"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<FaGithub />}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#64ffda",
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
                      color: "#64ffda",
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  href="mailto:akshatgupta0609@gmail.com"
                  startIcon={<FaEnvelope />}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#64ffda",
                    },
                  }}
                >
                  Email
                </Button>
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
              <Paper
                elevation={3}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#64ffda",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "text.secondary",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#64ffda",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "text.secondary",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#64ffda",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "text.secondary",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#64ffda",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "text.secondary",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
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
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
