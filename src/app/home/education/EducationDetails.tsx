import { Button, Dialog, Slide} from "@mui/material";
import React from "react";
import { TransitionProps } from '@mui/material/transitions';
import { BEDetails } from "./BEDetails";
import { MEDetails } from "./MEDetails";

export const SlideTransition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface EducationProps {
    step: string
}
export const EducationDetails: React.FC<EducationProps> = ({ step }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button color="primary" variant="contained" onClick={handleClickOpen}>
                Know More
            </Button>
            <Dialog
                open={open}
                TransitionComponent={SlideTransition}
                keepMounted
                fullWidth
                maxWidth="md" 
                onClose={handleClose}
                aria-labelledby="education-details"
                aria-describedby="My Education detail"
            >
                {step === "M.E." ? <MEDetails /> : <BEDetails />}
            </Dialog>
        </React.Fragment>
    );
};