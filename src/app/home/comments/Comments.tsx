import { Dialog, Button, Box } from "@mui/material";
import { useState } from "react";
import { SlideTransition } from "../education/EducationDetails";
import { StakeHolderComments } from "./StakeHolderComments";

export const Comments = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
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
