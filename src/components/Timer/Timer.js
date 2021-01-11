import React from 'react'
import './styles.scss'

const Timer = props => {
    return (
        <div className='Timer'>
            <div className='Timer_container'></div>
            <div className='button_container'>
                <button>Start / Stop</button>
                <button>Wait</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Timer
