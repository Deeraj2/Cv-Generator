import React from 'react';
import './Resume.css';

function Resume({info}) {
  return (
    <div className='resume'>
        <div className='cv'>
            <div className='cv-layout'>
                <h2>{info.name}</h2>
                <p>{info.email}</p>
                <p>{info.pno}</p>
                <p className='address'>{info.address}</p>
                <hr />
                <h3>{info.title}</h3>
                <p className='desc'>{info.desc}</p>
                <hr />
                <h3>Experience</h3>
                <div className='cv-experience'>
                    
                    <div className='exp-date'>
                        <p>to <span>-</span> from</p>
                    </div>
                    <div className='exp-detail'>
                        <h4>Position</h4>
                        <p>Company</p>
                        <p>City</p>
                    </div>
                </div>
                <hr />
                <h3>Education</h3>
                <div className='cv-education'>    
                    <div className='edu-date'>
                        <p>to <span>-</span> from</p>
                    </div>
                    <div className='edu-detail'>
                        <h4>University</h4>
                        <p>Degree</p>
                        <p>City</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume