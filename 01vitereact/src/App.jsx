// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme, redTheme } from './Components/UserCard'

function App() {
  const [themeName, setThemeName] = useState('light');

  const getTheme = (name) => {
    switch (name) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'red':
        return redTheme;
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <CssBaseline />
      <div style={{ padding: 20 }}>
        <Button variant="contained" onClick={() => setThemeName('light')}>Light Theme</Button>
        <Button variant="contained" onClick={() => setThemeName('dark')} style={{ margin: 10 }}>Dark Theme</Button>
        <Button variant="contained" onClick={() => setThemeName('red')}>Red Theme</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
