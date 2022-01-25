import { useTheme } from "styled-components";
import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import ProjectsPageTitle from "../../components/ProjectPageTitle";
import ProjectsList from "../../components/ProjectsList";
import ButtonSection from "../../components/ButtonSection";
import Footer from "../../components/Footer";

const ProjectsPage = () => {
  const theme = useTheme();

  return (
    <div>
      <SEO
        title="JC - Portfolio"
        description="Personal Web Developer Portfolio. Here are some of my projects made mostly with HTML, CSS, JavaScript, ReactJS, NextJS, Python, Django, PHP, Laravel, SQL "
      />
      <Navbar
        theme={theme}
        firstButton={{ text: "Get in Touch", href: "/Contact", target: "" }}
        secondButton={{ text: "About", href: "/#about", target: "" }}
      />
      <ProjectsPageTitle theme={theme} />
      <ProjectsList theme={theme} />
      <ButtonSection
        theme={theme}
        firstButton={{ text: "Get in Touch", href: "/Contact", target: "" }}
        secondButton={{ text: "About", href: "/#about", target: "" }}
      />
      <Footer theme={theme} />
    </div>
  );
};

export default ProjectsPage;
