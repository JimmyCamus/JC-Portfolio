import { useTheme } from "styled-components";
import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import ContactPageTitle from "../../components/ContactPageTitle";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

const Contact = () => {
  const theme = useTheme();
  return (
    <div>
      <SEO
        title="JC - Contact Me"
        description="Contact me to work as a full stack web developer"
      />
      <Navbar
        theme={theme}
        firstButton={{ text: "My projects", href: "/Portfolio", target: "" }}
        secondButton={{ text: "About", href: "/#about", target: "" }}
      />
      <ContactPageTitle theme={theme} />
      <ContactForm theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default Contact;
