import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    color: "firebrick",
    bio: "I made this!",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  };

  const projects = [
    {
      id: 1,
      name: "Project One",
      about: "This is the first project.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Project Two",
      about: "Another cool project.",
      technologies: ["HTML", "CSS", "Node.js"],
    },
    {
      id: 3,
      name: "Project Three",
      about: "Yet another project.",
      technologies: ["Python", "Flask", "SQL"],
    },
  ];

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
