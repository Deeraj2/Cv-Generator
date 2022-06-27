import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className='form'>
        <h1 className='form-hero'>Cv Application</h1>
        <form  className='form-input'>
            <h2>General Information</h2>
            <input type='text' placeholder='Name' required />
            <input type='text' placeholder='Title' />
            <input type='email' placeholder='Email' required />
            <input type='text'  placeholder='Phone No.' required />
            <input type='text' placeholder="Address" required />
            <textarea placeholder='Description' className='form-desc' />

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