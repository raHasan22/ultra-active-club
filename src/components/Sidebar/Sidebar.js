import React, { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const [restTime, setARestTime] = useState(0);
    const [DisplayRestTime, setDisplayRestTime] = useState(0);
    useEffect( () =>{
        const x = localStorage.getItem('Rest-time-in-seconds')

        setDisplayRestTime(0 + JSON.parse(x))
    },[restTime])

    
    
    function setRestTime(num){
        const newRestTime = num+ 0;
        setARestTime(newRestTime);
        localStorage.setItem('Rest-time-in-seconds', JSON.stringify(newRestTime))
    }
    
    return (
        <div className='sidebar'>
            <h3>RA Hasan</h3>
            <h6>Sylhet. Bangladesh</h6>
            <p>
                <small>ID: RY65IUY</small>
            </p>
            <p><small>Age: 23yrs</small></p>
            <p><small>Premium: No</small></p>
            <div className='button-div'>
                <h5>Break Time</h5>
            <button onClick={()=> setRestTime(10)}>10s</button>
            <button onClick={()=> setRestTime(20)}>20s</button>
            <button onClick={()=> setRestTime(30)}>30s</button>
            <button onClick={()=> setRestTime(40)}>40s</button>
            <button onClick={()=> setRestTime(50)}>50s</button>
            </div>
            <br />
            <br />
            <p><strong>TOTAL TIME:</strong> {props.value}Min</p>
            <p><strong>Break Time:</strong> {DisplayRestTime}s</p>
            <br />
            <br />
            <button>Start Booking</button>
        </div>
    );
};

export default Sidebar;