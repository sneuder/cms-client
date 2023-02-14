import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'inherit',
            height: '3rem',
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: '2rem',
            padding: '0rem',
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: '2rem',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0rem',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: '0rem',
        },
      },
    },
  },
});

export default theme;
