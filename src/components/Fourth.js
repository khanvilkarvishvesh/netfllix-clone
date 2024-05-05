import React from 'react'
import './style.css';

export default function Fourth() {
    return (
        <>
        <div className='Fourth'>
            <div>
                <h1 className='everywhere'>Watch everywhere</h1>
                <p id='Fourth'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className='device'>
                <img id='dev' src="device-pile-in.png" alt="" />
                <div className='Fvideo'>
                <video src="video-devices-in.m4v" className='Fourthvideo' autoPlay loop muted ></video>
                </div>
                </div>
                
                </div>
                <hr id='Fhr'></hr>
                </>
                
    )
}
