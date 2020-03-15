import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Layout from './layout';
import { ContextProvider } from './Context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
