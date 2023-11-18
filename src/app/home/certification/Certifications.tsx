
import { Element } from 'react-scroll';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { CertificationQuotes } from '../QuoteList';
import { env } from '../../env';

const CertificationList = [
    {
        icon: "ocjp.png",
        title: "Oracle Certified Java Professional",
        detail: "95% Score",
        alt: "ocjp-certified"
    },
    {
        icon: "rwd.png",
        title: "Responsive Web Designer",
        detail: "Free code camp Certified",
        alt: " Responsive Web Design"
    },

    {
        icon: "js-ds.png",
        title: "Javascript Algorithm and Data structure",
        detail: "Free code camp Certified",
        alt: "Algorithm & Data Structure"
    },

    {
        icon: "redux.svg",
        title: "Front end Libraries (Bootstrap, React, Redux)",
        detail: "Free code camp Certified",
        alt: "Libraries"
    }

]
export const Certifications = () => {
    return (
        <Element name="certifications" className="section" id="certifications">
            <CertificationQuotes />
            <Typography variant="h4" component="h3" align="center" className="section-header">
                Certifications
            </Typography>
            <div className="certifications">
                <List>
                    {CertificationList.map(
                        (certificate, index) => (
                            <ListItem key={index} data-aos="fade-down">
                                <ListItemAvatar>
                                    <Avatar className="avatar">
                                        <img src={`${env.IMAGE_PATH}/${certificate.icon}`} alt="" width="110px" height="110px" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={certificate.title} secondary={certificate.detail} />
                            </ListItem>
                        )
                    )}
                </List>
            </div>
        </Element>
    )
}
export default Certifications;