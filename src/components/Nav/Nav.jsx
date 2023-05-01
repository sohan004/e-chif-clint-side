import React from 'react';
import { NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Nav = () => {
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
                                <NavLink className={({ isActive }) => `nav-link active ${isActive && 'text-primary'}`} aria-current="page" to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                        <img id='ttip' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: '50px' }} alt="" className="img-fluid rounded-circle me-3" />
                        <ReactTooltip
                            anchorId="ttip"
                            place="bottom"
                            variant="info"
                            content="I'm a info tooltip"
                        />
                        <button className="btn btn-warning" type="submit">Log in</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;