import React from 'react'
import './style.css';

export default function Third() {
  return (
    <div className='Third'>
      <div className='strangerthings'>
        <img className="stranger" src="mobile-0819.jpg" alt=""></img>
      </div>
      <div className='containers'>
        <h3 className="box">Stranger things </h3>
      </div>
      <img className="boxshot" src="boxshot.png" alt=""></img>
      <p id='Downloading'>Downloading..</p>
      <img id="icon" src="download-icon.gif" alt="" />
      <div className='offline'>
        <h1>Download your shows to watch offline</h1>
        <p className='para'>Save your favourites easily and always have something to watch.</p>
        </div>
        <hr id='thirdhr'/>
    </div>
  )
}
