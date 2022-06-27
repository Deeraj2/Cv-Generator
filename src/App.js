import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Resume from './components/CV/Resume'
import Form from './components/Form/Form';

function App() {
  return (
    <div className="app">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6}>
          <Resume />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
