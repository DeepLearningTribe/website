/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import yellow from 'material-ui/colors/yellow';
import red from 'material-ui/colors/red';

// A theme with custom primary and secondary color.
// It's optional.
const themeSettings = {
  palette: {
    primary: {
      light: lightBlue[400],
      main: lightBlue[600],
      dark: lightBlue[800],
    },
    secondary: yellow,
    error: red,
    contrastThreshold: 2,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 18,
  },
};

export const lightTheme = createMuiTheme(themeSettings);

export const darkTheme = createMuiTheme({
  ...themeSettings,
  palette: { ...themeSettings.palette, type: 'dark' },
});

function createPageContext() {
  return {
    theme: lightTheme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
