import React, { useState } from 'react';
import './Log.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Signup = () => {

    const [typ, setTyp] = useState(false)
    const [typ2, setTyp2] = useState(false)
    return (
        <div className='container'>
            <div className='mt-5 bg-white p-3 rounded d-flex flex-column flex-md-row'>
                <div className='w-100 w-md-50'>
                    <h3 className='text-center'>Please Sign in First</h3>
                    <form action="">
                        <h5 className="text-secondary">Name</h5>
                        <input placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <h5 className="text-secondary mt-4">Email</h5>
                        <input placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <h5 className="text-secondary mt-4">Photo Url</h5>
                        <input placeholder='Photo url' type="text" name="photo" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Password</h5>
                            <input placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                        </div>
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Retype Password</h5>
                            <input placeholder='password' type={typ2 ? 'text' : 'password'} name="pass" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <h5 className='ey'>{typ2 ? <FaEye onClick={() => setTyp2(!typ2)} /> : <FaEyeSlash onClick={() => setTyp2(!typ2)} />}</h5>
                        </div>
                        <input type="submit" className='w-100 p-2 mt-4 rounded border-0 bg-warning bg-opacity-75' value="Log in" />
                    </form>
                    <p className='text-center my-3'>Already you have account please <Link to="/log_in">sign in</Link></p>
                </div>
                <div className='w-100 w-md-50'>

                </div>
            </div>
        </div>
    );
};

export default Signup;


