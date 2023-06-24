import { makeStyles } from "@mui/material";
import { useTheme } from "@emotion/react";
export const themeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#553a41',
        },
        secondary: {
            main: '#654f6f',
        },
        background: {
            default: '#f9f6f1',
            paper: '#ece2d0',
        },
        warning: {
            main: '#222e50',
        },
        success: {
            main: '#55868c'
        }
    },
    components: {
        MuiTypography: {

            variants : [
                {
                    props: {
                        variant: "h2"
                    },
                    style: {
                        fontSize: 30
                    }
                },
                {
                    props :{
                        variant: "h3"
                    },
                    style : {
                        fontSize: 35
                    }
                },
                {
                    props: {
                        variant: "h4"
                    },
                    style: {
                        fontSize: 25
                    }
                },
                {
                    props: {
                        variant: "h5"
                    },
                    style: {
                        fontSize: 20
                    }
                }
            ]
        },
    }
};

// export const useStyles = makeStyles((theme) => ({

//     yellowPaper: {
//         backgroundColor: '#553a41'
//     },

// }));