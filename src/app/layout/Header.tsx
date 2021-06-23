import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll'


export const Header = (props: any) => {
  const { match, location, history } = props;

  console.log(match, location, history);
  const links = [
    {
      name: "Skills",
      elementName: "skills"
    },
     {
      name: "Education",
      elementName: "education"
     },
     {
      name: "Experience",
      elementName: "experience"
     },
     {
       name: "Recognition",
       elementName: "recognition"
     }
  ]
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
          {links.map(
            (link, index) => (  

            <Link className="link" activeClass="active" key={index} to={link.elementName}  
                spy={true} smooth={true} duration={250}  >
              {link.name}
            </Link>
          
          ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

