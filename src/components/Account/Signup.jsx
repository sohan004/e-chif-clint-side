import React, { useContext, useState } from 'react';
import './Log.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const { google, git, login, signup, updt, out } = useContext(AuthContex)
    const navigate = useNavigate()

    const [typ, setTyp] = useState(false)
    const [typ2, setTyp2] = useState(false)
    const [err, setErr] = useState('')

    const handle = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.photo.value
        const pass1 = e.target.pass1.value
        const pass2 = e.target.pass2.value
        if (pass1.length < 6) {
            return setErr('password minimum 6 characters')
        }
        if (pass1 != pass2) {
            return setErr('password and retype password not match')
        }
        else {
            signup(email, pass1)
                .then(result => {
                    updt(result.user, name, img).then().catch(error => console.log(error.message))
                    setErr('')
                    Swal.fire(
                        'Account create successfully',
                        'Now go to Log in your account',
                        'success'
                      )
                    out().then(r => navigate('/log_in')).catch(error => console.log(error.message))
                })
                .catch(error => {
                    setErr(error.message)
                })
        }
    }
    return (
        <div className='container'>
            <div className='mt-5 bg-white p-3 rounded d-flex flex-column flex-md-row'>
                <div className='w-100 w-md-50'>
                    <h3 className='text-center'>Please Sign in First</h3>

                    <form onSubmit={handle} action="">
                        <h5 className="text-secondary">Name</h5>
                        <input required placeholder='name' type="text" name="name" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <h5 className="text-secondary mt-4">Email</h5>
                        <input required placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <h5 className="text-secondary mt-4">Photo Url</h5>
                        <input required placeholder='Photo url' type="text" name="photo" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Password</h5>
                            <input required placeholder='password' type={typ ? 'text' : 'password'} name="pass1" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                        </div>
                        <div className='position-relative'>
                            <h5 className="text-secondary mt-4">Retype Password</h5>
                            <input required placeholder='password' type={typ2 ? 'text' : 'password'} name="pass2" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <h5 className='ey'>{typ2 ? <FaEye onClick={() => setTyp2(!typ2)} /> : <FaEyeSlash onClick={() => setTyp2(!typ2)} />}</h5>
                        </div>
                        <p className='text-danger'>{err}</p>
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


