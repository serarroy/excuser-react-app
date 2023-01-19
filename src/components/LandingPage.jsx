import React from 'react'
import '../stylesheets/LandingPage.css'

function LandingPage( {setStart }) {

    return (
        <div>
            <div>
                <h1 className='sub-title'>Escape boredom. No need to make boring excuses - Just use Excuse Me!!</h1>
            </div>
            <div className='btn-container'>
                <button className='btn' onClick={() => setStart(true)}>Let's excuse!!</button>
            </div>
        </div>
    )
}

export default LandingPage;
