import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Resume from './components/CV/Resume'
import Form from './components/Form/Form';

function App() {
   const [info, setInfo] = useState({
    name:"",
    title: "",
    email: "",
    pno: "",
    address: "",
    desc: ""
  })

  console.log(info)

  return (
    <div className="app">
      <h1 className='app-hero'>CV Application</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Form  setInfo={setInfo} info={info} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Resume  info={info}/>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
