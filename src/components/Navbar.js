import './style.css';
import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <img className='bg' id='bg' src="Netflix-logo-removebg-preview.png" alt="" class="logo" />
            <select name="Languages" id="Languages" >
                <option value="English">

                    <img className='logo' src="th.jfif" alt="" class="icon" />English
                </option>
                <option value="हिन्दी">हिन्दी</option>
            </select>

            <button className='signin'>Sign in</button>
        </div>
    )
}
