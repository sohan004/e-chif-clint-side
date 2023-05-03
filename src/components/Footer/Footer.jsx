import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-5 position-sticky top-100'>
            <div className='container'>
                <div className="row g-3 text-white">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className='mt-5'>
                            <h1 style={{padding: '40px 20px'}} className='fw-light  text-dark bg-light d-inline  rounded-circle'>E-Chif</h1>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div>
                            <h6 className='mb-3'>PRODUCT</h6>
                            <p>Fetures</p>
                            <p>Chef</p>
                            <p>Food</p>
                            <p>Rechipes</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div>
                        <h6 className='mb-3'>COMPANY</h6>
                        <p>privacy</p>
                        <p>Terms of Service</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div>
                            <input type="text" name="" placeholder='Email' className='p-2 border-0 rounded-3 w-100 d-block' id="" />
                            <button className="btn btn-warning mt-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;