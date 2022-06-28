import { Grid } from '@mui/material';
import React, { useState, useRef } from 'react';
import './App.css';
import Resume from './components/CV/Resume'
import Form from './components/Form/Form';
import { useReactToPrint } from 'react-to-print';

function App() {
   const [info, setInfo] = useState({
    name:"",
    title: "",
    email: "",
    pno: "",
    address: "",
    desc: ""
  })
  const [exp, setExp] = useState([{
    position: '',
    company: '',
    city: '',
    from: '',
    to: ''
    }
  ])

  const [edu, setEdu] = useState([{
    university: '',
    city:'',
    degree:'',
    from: '',
    to: ''
  }])

  console.log(edu)

 
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="app">
      <h1 className='app-hero'>CV Application</h1>
      <Grid container spacing={2}>
        <Grid item xs={11} md={6}>  
          <Form  setInfo={setInfo} info={info} exp={exp} setExp={setExp} edu={edu} setEdu={setEdu}  handlePrint={handlePrint} />
        </Grid>
        <Grid item xs={11} md={6}>
          <Resume  info={info} exp={exp} edu={edu} handlePrint={handlePrint}  ref={componentRef}  />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
