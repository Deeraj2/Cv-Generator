import React from 'react';
import Exp from './Exp/Exp';
import Edu from './Edu/Edu'
import './Form.css';

function Form({info, setInfo, exp, setExp, edu, setEdu}) {

  

  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form'>
        <form  className='form-input' autoComplete='off'  onSubmit={handleSubmit}  info={info}>
            <h2>General Information</h2>
            <input type='text' placeholder='Name' value={info.name} onChange={(e)=> setInfo({...info, name:e.target.value})} />
            <input type='text' placeholder='Title' value={info.title} onChange={(e)=> setInfo({...info, title:e.target.value})} />
            <input type='email' placeholder='Email' value={info.email} onChange={(e)=> setInfo({...info, email:e.target.value})} />
            <input type='text'  placeholder='Phone No.' value={info.pno} onChange={(e)=> setInfo({...info, pno:e.target.value})} />
            <input type='text' placeholder="Address" value={info.address} onChange={(e)=> setInfo({...info, address:e.target.value})} />
            <textarea placeholder='Description' className='form-desc' value={info.desc} onChange={(e)=> setInfo({...info, desc:e.target.value})} />

            <h2>Experience</h2>
            <Exp exp={exp} setExp={setExp} />

            <h2>Education</h2>
            <Edu edu={edu} setEdu={setEdu} />

            <button type='submit' className='form-submit'>Generate PDF</button>
        </form>
    </div>
  )
}

export default Form