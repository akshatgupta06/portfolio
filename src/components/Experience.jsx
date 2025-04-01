import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Developer",
    company: "Best Koki Automotive Pvt Ltd (Subsidiary of Best Group)",
    location: "Gurugram, India",
    duration: "July 2024 - Present",
    description: [
      "Developed interfaces to display real-time data for monitoring purposes from in-house developed IIoT devices on machines in the plant",
      "Built an Employee Portal for inventory tracking and reporting, providing real-time stock updates, digital logs, and role-based dashboards to support data-driven decision-making",
      "Created responsive and visually appealing email templates, incorporating personalization elements to improve engagement and align with marketing objectives",
      "Managed the implementation of digital technology across the entire Best Group",
    ],
  },
  {
    title: "Developer",
    company: "BeSingular (Subsidiary of Best Group)",
    location: "Gurugram, India",
    duration: "September 2023 - June 2024",
    description: [
      "Designed websites for various summer camps, increasing the target audience by 55%.",
      "Designed, developed, and tested HTML5, CSS3, jQuery, and React JS to meet accessibility standards.",
      "Created various email templates using HTML and CSS for summer camps and boot camps.",
      "Developed user interface using React JS and Flux.",
      "Led a team of interns in developing web-based educational resources.",
    ],
    type: "work",
  },
  {
    title: "Frontend Trainee",
    company: "BeSingular (Subsidiary of Best Group)",
    location: "Gurugram, India",
    duration: "September 2022 - August 2023",
    description: [
      "Designed CSS templates for use on all pages of the website.",
      "Assisted in developing a responsive website for the organization.",
      "Shadowed senior web developers to gain advanced skills.",
      "Created dynamic dashboards using Power BI.",
    ],
    type: "work",
  },
  {
    title: "Intern",
    company: "Digipodium Tech Ltd",
    location: "Lucknow, India",
    duration: "October 2019 - March 2020",
    description: [
      "Completed a dynamic internship focused on developing skills in web development",
      "Gained expertise in HTML, CSS, and JavaScript",
      "Worked on real-world web development projects",
      "Developed responsive and interactive web applications",
    ],
    type: "internship",
  },
  {
    title: "Intern",
    company: "El-Systems Services",
    location: "Varanasi, India",
    duration: "June 2019 - July 2019",
    description: [
      "Worked on data processing and analysis projects",
      "Gained hands-on experience with Python programming",
      "Applied data analysis techniques to real-world problems",
    ],
    type: "internship",
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #112240 0%, #0a192f 100%)",
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
            Work Experience
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={exp.title + exp.company}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderColor: "#64ffda",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#64ffda",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      mb: 0.5,
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#00b8ff",
                      mb: 0.5,
                    }}
                  >
                    {exp.location}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {exp.description.map((point, i) => (
                      <Typography
                        component="li"
                        key={i}
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          mb: 1,
                          "&::marker": {
                            color: "#64ffda",
                          },
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
