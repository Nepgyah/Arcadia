import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white?: PaletteColorOptions;
  }
}
const theme = createTheme({
  palette: {
    primary: { main: '#505477' },
    secondary: { main: '#FFC2C2' },
  },
  components: {
      MuiSelect: {
        variants: [
          {
            props: { variant: 'standard'},
            style: {
              color: '#ffffff'
            }
          }
        ]
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // general overrides
          },
        },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: '#3E3E42',
            backgroundColor: '#FFC2C2',
            '&:hover': {
              backgroundColor: '#D67897',
              color: '#ffffff'
            },
          },
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            color: '#505477 !important',
          },
        },
        {
          props: { variant: 'text', color: 'white' },
          style: {
            color: '#ffffff',
          },
        },
      ],
    },
  }
});

export default theme;