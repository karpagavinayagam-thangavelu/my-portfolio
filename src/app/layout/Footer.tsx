import React, { Fragment } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import { darkTheme } from "../../styles/theme";
import Quotes from "../../components/Quotes";

const contacts = [
  {
    link: "Linked In",
    icon: LinkedInIcon,
    label: "Linked in",
  },
  {
    link: "Gmail",
    icon: MailIcon,
    label: "Mail",
  },
  {
    link: "Facebook",
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    link: "Github",
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
