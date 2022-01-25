import { useTheme } from "styled-components";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ButtonSection from "../components/ButtonSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  const theme = useTheme();
  return (
    <div>
      <SEO
        title="JC - Web Developer"
        description="Personal Web Developer Portfolio. I'M a Fullstack developer with emphasis on BackEnd"
      />
      <Navbar
        theme={theme}
        firstButton={{ text: "Get in Touch", href: "/Contact", target: "" }}
        secondButton={{ text: "About", href: "#about", target: "" }}
      />
      <Hero theme={theme} />
      <About theme={theme} />
      <ButtonSection
        theme={theme}
        firstButton={{ text: "Get in Touch", href: "/Contact", target: "" }}
        secondButton={{ text: "My projects", href: "/Portfolio", target: "" }}
      />
      <Footer theme={theme} />
    </div>
  );
};

export default LandingPage;
