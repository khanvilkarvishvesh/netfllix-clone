import React from 'react'
import './style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='call'>
                <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
            </div>
            <div className='footersection'>
                <div className='one'>
                <a href="FAQ">FAQ</a>
                <a href="Investor Relations">Investor Relations</a>
                <a href="Privacy">Privacy</a>
                <a href="Speed Test">Speed Test</a>
                </div>
                <div className='two'>
                <a href="help Center">help Center</a>
                <a href="Jobs">Jobs</a>
                <a href="Cookie Prefrence">Cookie Prefrence</a>
                <a href="Legal Notice">Legal Notice</a>                
                </div>
                <div className='three'>
                <a href="Account">Account</a>
                <a href="Ways to Watch">Ways to Watch</a>
                <a href="Coporate Information">Coporate Information</a>
                <a href="Only on Netflix">Only on Netflix</a>
                </div>
                <div className='four'>
                <a href="Media Center">Media Center</a>
                <a href="Terms of Use">Terms of Use</a>
                <a href="Contact Us">Contact Us</a>
                </div>
            </div>
            <div className='end'>
            <select name="Languages" id="Languages">
                <option value="English">

                    <img className='logo' src="th.jfif" alt="" class="icon" />English
                </option>
                <option value="हिन्दी">हिन्दी</option>
            </select>
            <p>Netflix India</p>
            </div>
        </div>
    )
}
