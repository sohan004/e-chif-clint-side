import React, { useState } from 'react';
import './Log.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Log = () => {

    const [typ, setTyp] = useState(false)

    const handle = e => {
        e.preventDefault()
        const name = e.target.email.value
        const pass = e.target.pass.value
        console.log(name, pass)
    }

    return (
        <div className=''>
            <div className='mt-5 bg-white p-3 rounded d-flex flex-column flex-md-row'>
                <div className='w-100 w-md-50'>
                    <h3 className='text-center'>Please Log in First</h3>
                    <form onSubmit={handle} action="">
                        <h5 className="text-secondary">Email</h5>
                        <input required placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Password</h5>
                            <input required placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <Link>forget password</Link>
                            <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                        </div>
                        <input type="submit" className='w-100 p-2 mt-4 rounded border-0 bg-warning bg-opacity-75' value="Log in" />
                    </form>
                    <div className='d-flex gap-3 my-4'>
                        <hr className="w-100" />
                        <p>or</p>
                        <hr className="w-100" />
                    </div>
                    <div className='d-flex gap-4 justify-content-center'>
                        <h3><FaGoogle className='or' /></h3>
                        <h3><FaGithub className='or' /></h3>
                    </div>
                    <p className='text-center my-3'>You have no account please <Link to="/sign_up">Register</Link></p>
                </div>
                <div className='w-100 w-md-50'>

                </div>
            </div>
        </div>
    );
};

export default Log;


