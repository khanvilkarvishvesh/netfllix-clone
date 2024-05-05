import React from 'react'

export default function Questions() {
    return (
        <div className='questions'>
            <h1>Frequently Asked Questions</h1>
            <div className='Questions'>
                <div className='Question'>
                    <input type='checkbox' id='q1'/>
                    <label className='header' for="q1">
                        What is Netflix?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                            <br />
                            <br />
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>
                </div>

                <div className='Question'>
                    <input type='checkbox' id='q2'/>
                    <label className='header' for="q2">
                    How much Netflix cost?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </div>
                </div>

                <div className='Question'>
                    <input type='checkbox' id='q3'/>
                    <label className='header' for="q3">
                    Where I can watch?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                <br />
                <br />
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                </div>

                <div className='Question'>
                    <input type='checkbox' id='q4'/>
                    <label className='header' for="q4">
                    How do I cancel?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                    <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>
                </div>

                <div className='Question'>
                    <input type='checkbox' id='q5'/>
                    <label className='header' for="q5">
                    What I can watch on Netflix?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </div>

                <div className='Question'>
                    <input type='checkbox' id='q6'/>
                    <label className='header' for="q6">
                    Is Netflix good for kids?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                    </label>
                    <div className='answer'>
                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>

            </div>
            <p id='lp'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='ls'>
        <form action="">
          <input type="email" className='emailaddress' name="Email Address" value="Email address" />
          <input type="submit" value="Get started >" class="submit" />
        </form>
      </div>
      <hr></hr>
        </div>
        
    )
}
