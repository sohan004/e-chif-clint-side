import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContex } from '../AuthProvider/AuthProvider';
import userImg from '../../assets/blank-profile-picture-gb085c28e0_1280.png'

const Nav = () => {
    const { user, out } = useContext(AuthContex)
    const getOut = () => {
        out().then().catch()
    }

    const phourl = user?.photoURL || null
    return (
        <>
            <nav className="navbar navbar-expand-lg py-2 mb-5">
                <div className="container-fluid">
                    <h1 className='fw-light'>E-Chif</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4 fw-bolder">
                                <NavLink className={({ isActive }) => `nav-link active ${isActive && 'text-primary p-2 border-bottom'}`} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bolder">
                                <NavLink className={({ isActive }) => `nav-link active ${isActive && 'text-primary p-2 border-bottom'}`} aria-current="page" to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                        {user && <img id='ttip' src={phourl ? phourl : userImg} style={{ width: '50px' }} alt="" className="img-fluid rounded-circle me-3" />}
                        {user && <ReactTooltip
                            anchorId="ttip"
                            place="bottom"
                            variant="info"
                            content={user.displayName}
                        />}
                        {!user && <Link to="/log_in"><button className="btn btn-warning" type="submit">Log in</button></Link>}
                        {user && <button onClick={getOut} className="btn btn-danger" >Log out</button>}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
