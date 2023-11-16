import {
  Avatar,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const interests = [
  "Mathematics and Statistics",
  "Parallel Programming Paradigm",
  "Advanced Datastructures and Algorithms",
  "Machine learning",
];

export const MEDetails = () => (
  <React.Fragment>
    <DialogTitle key="ME-ID" id="ME" variant="h3">
      Master of Engineering
    </DialogTitle>
    <DialogContent key="ME-Content">
      <DialogContentText>
        Have completed M.E. in Computer science and Engineering at Mepco schlenk
        Engineering college with First class and Distinction
      </DialogContentText>
      <TableContainer component={Paper}>
        <Table aria-label="Credits table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Earned CGPA Credits</TableCell>
              <TableCell align="center">Needed CGPA Credits</TableCell>
              <TableCell align="center">CGPA</TableCell>
              <TableCell align="center">Class Awarded</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="credits">
              <TableCell align="center">76</TableCell>
              <TableCell align="center">76</TableCell>
              <TableCell align="center">9.43</TableCell>
              <TableCell align="center">First class with Distinction</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <section>
        <Typography variant="h5" variantMapping={{ h5: "h4" }}>
          Interested Courses
        </Typography>
        <p></p>
        <List className="interests">
          {interests.map((interest, index) => (
            <ListItem className="interest" key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={interest} />
            </ListItem>
          ))}
        </List>
      </section>
      <section className="co-curricular">
        <Typography variant="h5" variantMapping={{ h5: "h4" }}>
          Co-curricular
        </Typography>
        <ul>
          <li>
            Got certified in Global English Testing services with Level IV score
            of CEFR B2{" "}
          </li>
          <li>
            Participated in National Seminar on Reaearch issues in Digital Image
            processing.
          </li>
        </ul>
      </section>
      <section className="extra-curricular">
        <Typography variant="h5" variantMapping={{ h5: "h4" }}>
          Extra-curricular
        </Typography>
        <ul>
          <li>
            Presented a Paper on{" "}
            <i>
              "Subspace based Generic object identification and classification"
            </i>{" "}
            in IEE Sponsored International conference on Engineering and
            Technology at Karpagam college of Engineering, Coimbatore.
          </li>
          <li>Conducted Software Engineering in practice classes.</li>
          <li>
            Worked as a Intern for 6 months in <i>Spime India Technologies</i>{" "}
            on Ecognition project and FFT Spectrum Analyzer Project
          </li>
        </ul>
      </section>
    </DialogContent>
  </React.Fragment>
);
