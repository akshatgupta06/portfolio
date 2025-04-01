import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaChartBar,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", proficiency: 90 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4", proficiency: 85 },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", proficiency: 85 },
  { name: "React", icon: <FaReact />, color: "#61DAFB", proficiency: 80 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38B2AC",
    proficiency: 75,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#7952B3",
    proficiency: 85,
  },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", proficiency: 80 },
  { name: "Power BI", icon: <FaChartBar />, color: "#F2C811", proficiency: 75 },
  { name: "SQL", icon: <SiMysql />, color: "#4479A1", proficiency: 70 },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Technical Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      background: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "2.5rem",
                      color: skill.color,
                      mb: 2,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ width: "100%", mt: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 0.5,
                        textAlign: "right",
                      }}
                    >
                      {skill.proficiency}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: skill.color,
                          borderRadius: 3,
                        },
                      }}
                    />
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

export default Skills;
