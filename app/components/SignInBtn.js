'use client'
import React from 'react'
import { useState } from 'react'

const SignInBtn = () => {
    const [emailSelected, setemailSelected] = useState(true)
    return (
        <div className="btn-n-inp">
            <a href="#" className="s-inp">Continue with Google</a>
            <a href="#" className="s-inp">Continue with Google</a>
            {
                emailSelected ? <input type="email" placeholder="Email" className="s-inp s-email"/> : <a href="#" className="s-inp" onClick={()=>{!emailSelected}}>Continue with email</a>
            }
        </div>
    )
}

export default SignInBtn