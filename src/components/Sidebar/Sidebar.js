import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
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
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            </div>
            <br />
            <br />
            <p><strong>TOTAL TIME:</strong> 100 Min</p>
            <p><strong>Total download once:</strong> 3</p>
            <br />
            <br />
            <button>Start Download</button>
        </div>
    );
};

export default Sidebar;