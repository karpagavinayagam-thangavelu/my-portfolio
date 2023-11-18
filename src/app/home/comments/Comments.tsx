import { Dialog, Typography, ThemeProvider, Button, Box } from "@mui/material";
import { TataLogo } from "../../../images/tata";
import { darkTheme } from "../../../styles/theme";
import React, { useState } from "react";
import { TrimbleLogo } from "../../../images/Trimble";
import { TCSLogo } from "../../../images/TcsLogo";
import { Element } from 'react-scroll';
import { ExperienceQuotes } from "../QuoteList";
import { SlideTransition } from "../education/EducationDetails";
import { StakeHolderComments } from "./StakeHolderComments";

const experiencePath = [
  {
    companyName: "Tata Consultancy Services",
    logo: TataLogo,
    bgColor: "#255295",
    logoWidth: "38%",
 //   companyCard: TataCard,
  },
  {
    companyName: "Trimble",
    logo: TrimbleLogo,
    bgColor: "#002D5B",
    logoWidth: "48%",
  //  companyCard: TrimbleCard,
  },
];
export const Comments = () => {
  const [step, setStep] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setStep("")
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
  return (
    <Box display={'flex'} mt={3} pt={2                                                                                                                                                          } alignContent={'center'} justifyContent={'center'}>
      <Button  color="primary" variant="outlined" onClick={() => handleClickOpen()} >More</Button>
      <Dialog
        open={open}
        TransitionComponent={SlideTransition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="comments"
        aria-describedby="comments"
      >
        <StakeHolderComments/>
      </Dialog>
    </Box>
  );
};

export default Comments;
