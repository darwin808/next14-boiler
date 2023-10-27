import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';
import {
  light as lightAccounts,
  dark as darkAccounts,
} from './palleteAccounts';
import { theme } from '@zesty-io/material';
const getTheme = (mode: any, themeToggler: any) =>
  responsiveFontSizes(
    createTheme({
      ...theme,
      palette: mode === 'light' ? light : (dark as any),
      shadows: shadows(mode) as any,
      typography: {
        fontFamily: '"Mulish", Arial',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1000,
        drawer: 1300,
        banner: 999,
      } as any,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xl2: 2500,
        },
      } as any,
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 600,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      // @ts-ignore
      themeToggler,
    }),
  );

export const getThemeAccounts = (mode: any, themeToggler: any) =>
  responsiveFontSizes(
    createTheme({
      ...theme,
      palette: mode === 'light' ? lightAccounts : (darkAccounts as any),
      shadows: shadows(mode) as any,
      typography: {
        fontFamily: '"Mulish", Arial',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1000,
        drawer: 1300,
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xl2: 2500,
        },
      } as any,
      // @ts-ignore
      tabTop: 114,
      themeToggler,
    }),
  );

export default getTheme;
