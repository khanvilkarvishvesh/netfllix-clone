import React from 'react'
import './style.css';

export default function Banner() {
  return (<>
        <div className='backgroundimg'>
         <img className="bgimg" src="./banner.jpg"alt=""/>
         </div>
         <div class="mainheading">
        <h1>
            Unlimited movies, TV shows and more
        </h1>
        <p class="secondheading">Watch anywhere. Cancel anytime.</p>
        <p class="thirdheading">Ready to watch? Enter your email to create or restart your membership.</p>
    </div>
    <div class="email">
        <input type="email" className='emailaddress' name="Email Address" placeholder="Email address"/>
        <input type="submit" value="Get started >" class="submit"/>
    </div>
    <hr/>
         </>
  )
}
