import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Image Search App",
    description:
      "Engineered an advanced image search platform that dynamically fetches high-quality images based on user input.",
    features: [
      "Intelligent search algorithm",
      "Responsive and modern UI",
      "Optimized lazy loading",
      "High scalability",
    ],
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    image: "/images/projects/image-search.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Bankist - Virtual Online Bank",
    description:
      "Developed a fully functional virtual banking platform that simulates real-world banking operations.",
    features: [
      "Secure authentication system",
      "Real-time fund transfers",
      "Transaction history tracking",
      "Session-based security",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    image: "/images/projects/bankist.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "A fully responsive clone of the Amazon homepage, built using HTML and CSS.",
    features: [
      "Exact replica of Amazon homepage",
      "Responsive design",
      "Navigation bar with search",
      "Product sections and deals",
    ],
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
    image: "/images/projects/amazon-clone.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Random Joke Generator",
    description:
      "A fun web application that fetches random jokes from an API and displays them on the screen.",
    features: [
      "Real-time joke fetching",
      "Dynamic UI updates",
      "Responsive design",
      "Clean interface",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
    image: "/images/projects/joke-generator.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Guess-The-Number",
    description:
      "An interactive number guessing game built using HTML, CSS, and JavaScript.",
    features: [
      "Random number generation",
      "Score system",
      "Hint system",
      "Reset functionality",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
    image: "/images/projects/guess-number.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Calorie Calculator",
    description:
      "A web application that helps users track their calorie intake by adding or removing food items.",
    features: [
      "Food list management",
      "Real-time calorie calculation",
      "User-friendly interface",
      "Responsive design",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    image: "/images/projects/calorie-calculator.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Spotify Clone",
    description:
      "Built a Spotify-like music player using HTML, CSS, and JavaScript. Utilized libraries and tools like Bootstrap, Chromecast extension, and Visual Studio code. Designed the layout, added features like volume control and song lists, added favorite artists and made the design responsive.",
    image: "/images/projects/spotify-clone.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/yourusername/spotify-clone",
    liveLink: "https://yourusername.github.io/spotify-clone",
  },
  {
    title: "Dice Roll Game",
    description:
      "A fun two-player game where players take turns rolling a dice to accumulate points. Features include dice rolling, turn-based gameplay, score holding, winning conditions, game reset, and responsive design.",
    image: "/images/projects/dice-game.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/yourusername/dice-game",
    liveLink: "https://yourusername.github.io/dice-game",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            transform: isHovered ? "translateY(-10px)" : "translateY(0)",
            "&:hover": {
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
              borderColor: "#64ffda",
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "flex-end",
                padding: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  href={project.github}
                  target="_blank"
                  startIcon={<FaGithub />}
                  sx={{
                    background: "rgba(100, 255, 218, 0.1)",
                    color: "#64ffda",
                    "&:hover": {
                      background: "rgba(100, 255, 218, 0.2)",
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  href={project.demo}
                  target="_blank"
                  startIcon={<FaExternalLinkAlt />}
                  sx={{
                    background: "rgba(100, 255, 218, 0.1)",
                    color: "#64ffda",
                    "&:hover": {
                      background: "rgba(100, 255, 218, 0.2)",
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Box>
            </Box>
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{
                color: "#64ffda",
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "rgba(255, 255, 255, 0.7)" }}
            >
              {project.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                marginBottom: 2,
              }}
            >
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: "rgba(100, 255, 218, 0.1)",
                    color: "#64ffda",
                    "&:hover": {
                      background: "rgba(100, 255, 218, 0.2)",
                    },
                  }}
                />
              ))}
            </Box>
            <List dense>
              {project.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FaCheckCircle style={{ color: "#64ffda" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                      borderColor: "#64ffda",
                      "& img": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "56.25%", // 16:9 aspect ratio
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: "#64ffda",
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          component="span"
                          sx={{
                            display: "inline-block",
                            mr: 2,
                            mb: 1,
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.875rem",
                            color: "#64ffda",
                            border: "1px solid #64ffda",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        href={project.githubLink}
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
                        Code
                      </Button>
                      <Button
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<FaExternalLinkAlt />}
                        sx={{
                          color: "text.secondary",
                          "&:hover": {
                            color: "#64ffda",
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
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

export default Projects;
