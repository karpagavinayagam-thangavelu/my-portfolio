import React, { Fragment } from "react";
import {
  ThemeProvider,
  IconButton,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { darkTheme } from "../../styles/theme";
import Quotes from "../../components/Quotes";
import {CodeCampLogo} from "../../images/CodeCamp";

const contacts = [
  {
    link: "https://www.linkedin.com/in/karpaga-vinayagam-thangavelu-66730220b",
    icon: LinkedInIcon,
    label: "Linked in",
  },
  {
    link: "karpagavinayagam.thangavelu@trimble.com",
    icon: MailIcon,
    label: "Mail",
  },
  {
    link: "https://www.freecodecamp.org/karpagavinayagam",
    icon: CodeCampLogo,
    label: "Code Camp",
  },
  {
    link: "https://github.com/karpagavinayagam-thangavelu",
    icon: GitHubIcon,
    label: "Github",
  },
];

export const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <footer>
        <Quotes 
          text="Wisdom is not a product of schooling but of the lifelong attempt to
        acquire it." 
          speaker= "Albert Einstein"
        />
        <section className="contacts">
          {contacts.map((contact) => (
            <Fragment key={contact.label}>
              <IconButton
                aria-label={contact.label}
                color="primary"
                href={contact.link}
                target="_blank"
                className="contact"
              >
                {React.createElement(contact.icon, {})}
              </IconButton>
            </Fragment>
          ))}
        </section>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;
