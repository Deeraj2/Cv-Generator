import React from 'react';
import Exp from './Exp/Exp';
import Edu from './Edu/Edu'
import './Form.css';
import Personal from './General Info/Personal';



function Form({info, setInfo, exp, setExp, edu, setEdu, handlePrint}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form'>
        <form  className='form-input' autoComplete='off'  onSubmit={handleSubmit}  >

          {/* Genral Information */}
            <h2>General Information</h2>
            <Personal info={info} setInfo={setInfo} />

          {/* Experience */}
            <h2>Experience</h2>
            <Exp exp={exp} setExp={setExp} />

          {/* Education */}
            <h2>Education</h2>
            <Edu edu={edu} setEdu={setEdu} />

            <button className='form-print' onClick={handlePrint}>Print this out!</button>
        </form>
    </div>
  )
}

export default Form