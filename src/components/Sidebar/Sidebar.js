import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const [restTime, setARestTime] = useState(0);
    function setRestTime(num){
        const newRestTime = num;
        setARestTime(newRestTime);
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
            <p><strong>Break Time:</strong> {restTime}s</p>
            <br />
            <br />
            <button>Start Download</button>
        </div>
    );
};

export default Sidebar;