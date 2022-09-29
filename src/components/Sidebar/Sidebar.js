import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const [restTime, setARestTime] = useState(0);
    function setRestTime(num){
        setARestTime(num)
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
                <h5>Download at a time</h5>
            <button onClick={()=> setRestTime(1)}>1</button>
            <button onClick={()=> setRestTime(2)}>2</button>
            <button onClick={()=> setRestTime(3)}>3</button>
            <button onClick={()=> setRestTime(4)}>4</button>
            </div>
            <br />
            <br />
            <p><strong>TOTAL TIME:</strong> {props.value} Min</p>
            <p><strong>Total download once:</strong> {restTime}</p>
            <br />
            <br />
            <button>Start Download</button>
        </div>
    );
};

export default Sidebar;