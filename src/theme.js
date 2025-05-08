'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary : {
            main: '#d32f2f',
            light: '#f44336',
            dark: '#b71c1c',
            contrastText: '#fff',
        }
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
});

export default theme;