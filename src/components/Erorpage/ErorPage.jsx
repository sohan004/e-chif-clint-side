import React, { Component } from 'react';
import erorPage from '../../assets/404.jpg'
import { Link } from 'react-router-dom';

class ErorPage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row d-flex align-items-center g-3'>
                    <div className="col-12 col-md-6">
                        <div>
                            <img src={erorPage} className='img.fluid ' alt="" />

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="text-center">
                            <h1 className='display-2'>404</h1>
                            <h3>page not found</h3>
                           <Link to="/"><button className="btn btn-secondary">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErorPage;