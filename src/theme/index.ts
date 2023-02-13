import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'inherit',
            padding: '0rem',
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '90px',
        },
      },
    },
  },
});

export default theme;
