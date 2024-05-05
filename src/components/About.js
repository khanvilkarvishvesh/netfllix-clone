import React from 'react'
import './style.css';

export default function About() {
  return (
    <>
     <div className='About' >
      <div className='title'>
        <h2>Enjoy on your TV</h2>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      {/* <div className='tvpng'> */}
        <img src='tv.png' className='TV' alt=''></img>
        <video src="bgvideo1.m4v" id='firstvideo' autoPlay loop muted ></video>
      {/* </div> */}
      <hr id='secondhr'/>
     </div>
    </>
  )
}
