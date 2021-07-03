import { Avatar, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';


const interests = [
    "Object Oriented Programming", "Database Management systems", "Compiler design", "Internet programming"
];

export const BEDetails = () => (
    <React.Fragment>
        <DialogTitle id="BE"><Typography variant="h3">Bachelor of Technology</Typography></DialogTitle>
        <DialogContent>
        <DialogContentText >
                Have completed B. Tech in Computer science and Engineering at Kalasalingam Academy of Research and Education with Honours and Distinction
                <TableContainer component={Paper}>
                    <Table aria-label="Credits table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Earned CGPA Credits</TableCell>
                                <TableCell align="center">Needed CGPA Credits</TableCell>
                                <TableCell align="center">CGPA</TableCell>
                                <TableCell align="center">Class Awarded</TableCell>
                                <TableCell align="center">Earned Non-CGPA Credits </TableCell>
                                <TableCell align="center">Needed Non-CGPA Credits </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="credits">
                                <TableCell align="center">191</TableCell>
                                <TableCell align="center">179</TableCell>
                                <TableCell align="center">8.64</TableCell>
                                <TableCell align="center">Honours</TableCell>
                                <TableCell align="center">27</TableCell>
                                <TableCell align="center">21</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <section>
                    <Typography variant="h5" variantMapping={{"h5": "h4"}}>Interested Courses</Typography>
                    <p></p>
                    <List className="interests">
                        {interests.map(
                            (interest) => (
                            <ListItem className="interest" key={interest}>
                                <ListItemAvatar>
                                <Avatar>
                                    <FavoriteIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={interest}  />
                            </ListItem>
                        )
                        )}
                    </List>
                </section>
                <section className="co-curricular">
                    <Typography variant="h5" variantMapping={{"h5": "h4"}}>Co-curricular</Typography>
                    <ul>
                        <li>Completed Cambridge ESOL Entry level certificate in Business English</li>
                        <li>Got certified as IBM Solution designer for Rational Functional Testing in Java</li>
                        <li>Completed Web designing, Core JAVA, Advanced JAVA, XML, J2EE Course in Apollo Computer Education</li>
                        <li>Completed IBM DB2 fundamental course by IBM Software center of Excellence</li>
                    </ul>
                </section>
                <section className="extra-curricular">
                    <Typography variant="h5" variantMapping={{"h5": "h4"}}>Extra-curricular</Typography>
                    <ul>
                        <li>Presented a Paper on <i>"Improving Time Efficiency in Adhoc Networks"</i> in INGINEA'2010 at Kalasalingam University</li>
                        <li>Got prizes in Code debugging, Fast coding</li>
                        <li>Conducted placement training and classes.</li>
                        <li>Member of ISTE, CSI student chapter, Photography club and NSS</li>
                    </ul>
                </section>
                <section className="projects">
                    <Typography variant="h5" variantMapping={{"h5": "h4"}}>Projects</Typography>
                    <ul>
                        <li>TODO...</li>
                    </ul>
                </section>
            </DialogContentText>
        </DialogContent>
    </React.Fragment>
);
