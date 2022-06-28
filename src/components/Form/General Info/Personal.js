import React from 'react';
import './Personal.css';

function Personal({info, setInfo}) {
  return (
    <div className='personal'>
        <input type='text' placeholder='Name' value={info.name} onChange={(e)=> setInfo({...info, name:e.target.value})} />
        <input type='text' placeholder='Title' value={info.title} onChange={(e)=> setInfo({...info, title:e.target.value})} />
        <input type='email' placeholder='Email' value={info.email} onChange={(e)=> setInfo({...info, email:e.target.value})} />
        <input type='text'  placeholder='Phone No.' value={info.pno} onChange={(e)=> setInfo({...info, pno:e.target.value})} />
        <input type='text' placeholder="Address" value={info.address} onChange={(e)=> setInfo({...info, address:e.target.value})} />
        <textarea placeholder='Description' className='form-desc' value={info.desc} onChange={(e)=> setInfo({...info, desc:e.target.value})} />
    </div>
  )
}

export default Personal