import React, { useState } from 'react'

export default function FAQ() {
  const [hide, sethide] = useState(false)
  const [first, setfirst] = useState(false)
  const show = () => {
    if (hide === true) {
        sethide(false)
    }
    else {
      sethide(true)
      setfirst(false)
      setf2(false)
      setf3(false)
      setf4(false)
      setf5(false)
    }
  }
  const visible =() =>{
    if (first === true) {
    setfirst(false)

    }
    else {
      setfirst(true)
      sethide(false)
      setf2(false)
      setf3(false)
      setf4(false)
      setf5(false)
    }
  }
  const [f2, setf2] = useState(false)
  const s2 =() =>{
    if (f2 === true) {
      setf2(false)
     }
      else {
        setf2(true)
        sethide(false)
        setfirst(false)
        setf3(false)
      setf4(false)
      setf5(false)
      }
  }
  const[f3, setf3]=useState(false)
  const s3 = () =>{
    if (f3 === true) {
      setf3(false)
     }
      else {
        setf3(true)
        setf2(false)
        sethide(false)
        setfirst(false)
        setf4(false)
      }
  }
  const [f4, setf4] = useState(false)
    const s4 = () =>{
      if (f4 === true) {
        setf4(false)
       }
        else {
          setf4(true)
          setf2(false)
          setf3(false)
          sethide(false)
          setfirst(false)
          setf5(false)
         }
      }
      const [f5, setf5] = useState(false)
      const s5 = ()=>{
        if (f5 === true) {
          setf5(false)
         }
          else {
            setf5(true)
            setf4(false)
            setf2(false)
            setf3(false)
            sethide(false)
            setfirst(false)
  
          }
      }
  return (
    <div className='FAQ'>
      <h1>Frequently Asked Questions</h1>
      <ul className='ul'>
        <li>
          <label className="label" for="first">
            <div className="ctn">
              <input type="checkbox" id="first" onClick={show} />
              What is Netflix?
            </div>
          </label>
          {hide && <div className="container">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>}

        </li>
        <li>

          {/* <button id='btn1'> */}
          <label for="second">

            <div className='ctn'>
              <input type="checkbox" id="second" onClick={visible} />
              How much Netflix cost?
            </div>
          </label>
          {/* </button> */}

          {first && <div className="container">
            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
          </div>}

        </li>
        <li>

          {/* <button id='btn2'> */}
          <label for="third">
            <div className='ctn'>
              <input type="checkbox" id="third" onClick={s2} />
              Where I can watch?
            </div>
          </label>
          {/* </button> */}

          {f2 && <div class="container">
            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              <br />
              <br />
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
          </div>}
        </li>
        <li>

          {/* <button id='btn3'> */}
          <label for="fourth">
            <div className='ctn'>
              <input type="checkbox" id="fourth" onClick={s3} />
              How do I cancel?
            </div>
          </label>
          {/* </button> */}

          {f3 && <div class="container">
            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>}

        </li>
        <li>

          {/* <button id='btn4'> */}
          <label for="fifth">
            <div className='ctn'>
              <input type="checkbox" id="fifth" onClick={s4}/>
              What I can watch on Netflix?
            </div>
          </label>
          {/* </button> */}

          {f4 && <div class="container">
            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
          </div>}

        </li>
        <li>

          {/* <button id='btn5'> */}
          <label for="sixth">
            <div className='ctn'>
              <input type="checkbox" id="sixth" onClick={s5}/>
              Is Netflix good for kids?
            </div>
          </label>
          {/* </button> */}

          {f5&&<div class="container">
            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
          </div>}

        </li>
      </ul>

      <p id='lp'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='ls'>
        <form action="">
          <input type="email" className='emailaddress' name="Email Address" placeholder="Email address" />
          <input type="submit" value="Get started >" class="submit" />
        </form>
      </div>
      <hr></hr>
    </div>
  )
}