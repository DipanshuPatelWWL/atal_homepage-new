import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Unauthorization() {
    return (
        <div className='flex flex-col justify-center text-center items-center'>

            <div className='p-8 text-4xl text-red-600 flex flex-col items-center'>
                <RiErrorWarningLine />
                <p>You do not have access to this page</p>
            </div>
            <div className='text-2xl mb-20'>
                <p className='mb-7'>We're sorry, your account does not have permission to access this page</p>
                <Link to="/login" className='bg-black text-white p-2 rounded px-6 hover:bg-red-600 hover:text-white'>Continue to Login</Link>

            </div>


        </div>
    )
}

export default Unauthorization