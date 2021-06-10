
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const paletteTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: "#0D6AA8"
        },
        secondary: {
            main: "#FFBE00"
        }
    }
});


export const darkPaletteTheme = responsiveFontSizes(createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#FFF",
            contrastText: "#0D6AA8",
        },
        secondary: {
            main: "#FFBE00"
        },  
    },
}));
export const darkTheme = responsiveFontSizes(createMuiTheme({
   ...darkPaletteTheme,
    overrides: {
        MuiIconButton: {
            colorPrimary: {
                border: "1px solid #FFF",
                "&:hover": {
                    backgroundColor : darkPaletteTheme.palette.primary.main,
                    color: darkPaletteTheme.palette.primary.contrastText
                },
            }
        },
        MuiTypography: {
            colorPrimary: {
                color: "#fff"
            }
        }
    }
}));

export const theme = responsiveFontSizes(createMuiTheme({
    ...paletteTheme,
    overrides: {
        MuiIconButton: {
            root: {
                border: "1px solid #0D6AA8"
            }
        }
    }
}));