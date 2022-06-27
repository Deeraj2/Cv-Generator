import React from 'react';
import './Form.css';

function Form({info, setInfo}) {

 

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
            <input type='text' placeholder='Position' required />
            <input type='text' placeholder='Company' required />
            <input type='text' placeholder='City' required />
            <input type='text' placeholder='From' required />
            <input type='text' placeholder='To' required />

            <h2>Education</h2>
            <input type='text' placeholder='University' required />
            <input type='text' placeholder='City' required />
            <input type='text' placeholder='Degree' required />
            <input type='text' placeholder='From' required />
            <input type='text' placeholder='To' required />

            <button type='submit' className='form-submit'>Generate PDF</button>
        </form>
    </div>
  )
}

export default Form