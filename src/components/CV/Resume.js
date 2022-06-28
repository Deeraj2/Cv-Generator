import React from 'react';
import './Resume.css';

const  Resume = React.forwardRef(({info, exp, edu}, ref) => {
  return (
    <div className='resume' >
        <div className='cv' ref={ref} >

            {/* General information */}
            <div className='cv-layout'>
                <h2>{info.name}</h2>
                <p>{info.email}</p>
                <p>{info.pno}</p>
                <p className='address'>{info.address}</p>
                <hr />
                <h3>{info.title}</h3>
                <p className='desc'>{info.desc}</p>
                <hr />


            {/* Experience */}
                <h3>Experience</h3>
                {exp.map((singleExp, index)=>(
                    <div key={index} className='cv-experience'>
                        <div className='exp-date'>
                            <p>{singleExp.from} <span>-</span> {singleExp.to}</p>
                        </div>
                        <div className='exp-detail'>
                            <h4>{singleExp.position}</h4>
                            <p>{singleExp.company}</p>
                            <p>{singleExp.city}</p>
                        </div>
                    </div>
                ))}
                


            {/* Education */}
                <hr />
                <h3>Education</h3>
                {edu.map((singleEdu, index)=>(
                    <div key={index} className='cv-education'>    
                    <div className='edu-date'>
                        <p>{singleEdu.from} <span>-</span> {singleEdu.to}</p>
                    </div>
                    <div className='edu-detail'>
                        <h4>{singleEdu.university}</h4>
                        <p> {singleEdu.degree} </p>
                        <p> {singleEdu.city} </p>
                    </div>
                </div>
                ))}



            </div>
        </div>
    </div>
  )
})

export default Resume;