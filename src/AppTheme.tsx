import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    darkGrey: Palette['primary'];
    lightGrey: Palette['primary'];
    tableBackgroundColor: string;
    tableHoverColor: string;
  }
  interface PaletteOptions {
    darkGrey: PaletteOptions['primary'];
    lightGrey: PaletteOptions['primary'];
    tableBackgroundColor: string;
    tableHoverColor: string;
  }
}

export const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        maxWidth: '80% !important',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#9c4360',
      main: '#A01441',
      dark: '#5c0e27',
    },
    secondary: {
      light: '#b3d3df',
      main: '#56A3BC',
      dark: '#708c96',
    },
    darkGrey: {
      main: '#3F3F3F',
    },
    lightGrey: {
      light: 'rgba(203,203,203,0.1)',
      main: 'rgba(203,203,203,1)',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9f9f9f',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },
    tableBackgroundColor: 'rgba(196, 196, 196, 0.15)',
    tableHoverColor: '#EAEAEA',
    text: {
      primary: '#3F3F3F',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    h2: {
      fontSize: '4rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '24px',
      fontWeight: 300,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 300,
    },
  },
});
