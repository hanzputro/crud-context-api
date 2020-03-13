import React from 'react';
import Layout from './layout';
import { ContextProvider } from './config/Context';

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
