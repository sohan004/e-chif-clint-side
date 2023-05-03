import React, { useContext, useState } from 'react';
import './Log.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvider/AuthProvider';
import gif from '../../assets/login.gif'

const Log = () => {
    const { google, git, login } = useContext(AuthContex)
    const loc = useLocation()
    const navigate = useNavigate()

    const [typ, setTyp] = useState(false)
    const [err, setErr] = useState('')

    const handle = e => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        login(email, pass).then(result => {
            setErr('')
            navigate(loc.state ? loc.state : '/')
        }).catch(error => setErr(error.message))
    }

    const googleLogin = () => {
        google()
            .then(result => {
                setErr('')
                navigate(loc.state ? loc.state : '/')
            })
            .catch(error => {
                setErr(error.message)
            })
    }
    const gitLogin = () => {
        git()
            .then(result => {
                setErr('')
                navigate(loc.state ? loc.state : '/')
            })
            .catch(error => {
                setErr(error.message)
            })
    }

    return (
        <div className=''>
            <div className='mt-5 bg-white p-3 rounded d-flex flex-column align-items-center gap-3 flex-md-row'>
                <div className='w-100 w-md-50'>
                    <h3 className='text-center'>Please Log in First</h3>
                    <p className="text-danger">{err}</p>
                    <form onSubmit={handle} action="">
                        <h5 className="text-secondary">Email</h5>
                        <input required placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Password</h5>
                            <input required placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
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
                        <h3><FaGoogle onClick={googleLogin} className='or' /></h3>
                        <h3><FaGithub onClick={gitLogin} className='or' /></h3>
                    </div>
                    <p className='text-center my-3'>You have no account please <Link to="/sign_up">Register</Link></p>
                </div>
                <div className='w-100 w-md-50'>
                    <img src={gif} alt="" className="img-fluid w-100" />
                </div>
            </div>
        </div>
    );
};

export default Log;


