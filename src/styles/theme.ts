
import { responsiveFontSizes, createTheme } from "@mui/material";

const paletteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#0D6AA8"
        },
        secondary: {
            main: "#FFBE00"
        }
    }
});


export const darkPaletteTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#FFF",
            contrastText: "#0D6AA8",
        },
        secondary: {
            main: "#FFBE00"
        },  
    },
}));
export const darkTheme = responsiveFontSizes(createTheme({
   ...darkPaletteTheme,
   components: {
        MuiIconButton: {
            styleOverrides: {
                colorPrimary : {
                    border: "1px solid #FFF",
                    "&:hover": {
                        backgroundColor : darkPaletteTheme.palette.primary.main,
                        color: darkPaletteTheme.palette.primary.contrastText,
                        fill: darkPaletteTheme.palette.primary.contrastText
                    },
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                /*
                colorPrimary: {
                    color: "#fff",
                    fill: "#fff"
                }*/
            }
        }
    }
}));

export const theme = responsiveFontSizes(createTheme({
    ...paletteTheme,
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    
                    border: "1px solid #0D6AA8"
                }
            }
        }
    }
}));