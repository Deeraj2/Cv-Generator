import React from 'react';
import './Edu.css';

function Edu({edu, setEdu}) {

  const handleEdu = (e, index) =>{
        const {name, value} = e.target
        const list = [...edu]
        list[index][name] = value
        setEdu(list)
    }

    const handleEduAdd = () => {
        setEdu([...edu, {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''}])
    }

    const handleEduDelete = (index) =>{
        const list = [...edu]
        list.splice(index, 1)
        setEdu(list)
    }

  return (
    <div>
        {edu.map((education, index) => (
            <div key={index} className='education'>
                <input type='text' name='university'  placeholder='University' value={education.university} onChange={(e) => handleEdu(e, index)}/>
                <input type='text' name='city' placeholder='City' value={education.city} onChange={(e) => handleEdu(e, index)} />
                <input type='text' name='degree' placeholder='Degree' value={education.degree} onChange={(e) => handleEdu(e, index)}/>
                <input type='text' name='from' placeholder='From' value={education.from} onChange={(e) => handleEdu(e, index)}/>
                <input type='text' name='to' placeholder='To' value={education.to} onChange={(e) => handleEdu(e, index)}/>
                {edu.length - 1 === index && edu.length < 6 && (
                    <button type="button" className='edu-btn' onClick={handleEduAdd}>Add</button>
                )}
                {edu.length !== 1 && (
                    <button className='edu-btn' onClick={handleEduDelete}>Delete</button>
                )}
            </div>
        ))}
    </div>
    
  )
}

export default Edu