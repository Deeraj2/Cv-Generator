import React from 'react';
import './Exp.css';

function Exp({exp, setExp}) {

    const handleExp = (e, index) =>{
        const {name, value} = e.target
        const list = [...exp]
        list[index][name] = value
        setExp(list)
    }

    const handleExpAdd = () => {
        setExp([...exp, {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''}])
    }

    const handleExpDelete = (index) =>{
        const list = [...exp]
        list.splice(index, 1)
        setExp(list)
    }

  return (
    <div >
        
        {exp.map((experience, index) => (
            <div key={index} className='expierence'>
                <input type='text' name='position'  placeholder='Position' value={experience.position} onChange={(e) => handleExp(e, index)}/>
                <input type='text' name='company' placeholder='Company' value={experience.company} onChange={(e) => handleExp(e, index)} />
                <input type='text' name='city' placeholder='City' value={experience.city} onChange={(e) => handleExp(e, index)}/>
                <input type='text' name='from' placeholder='From' value={experience.from} onChange={(e) => handleExp(e, index)}/>
                <input type='text' name='to' placeholder='To' value={experience.to} onChange={(e) => handleExp(e, index)}/>
                {exp.length - 1 === index && exp.length < 6 && (
                    <button type="button" className='exp-btn' onClick={handleExpAdd}>Add</button>
                )}
                {exp.length !== 1 && (
                    <button className='exp-btn' onClick={handleExpDelete}>Delete</button>
                )}
            </div>
        ))}


    </div>
  )
}

export default Exp