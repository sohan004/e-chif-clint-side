import React from 'react';
import { AiOutlineLike } from "react-icons/ai";

const Card = ({ d }) => {
    const { name, picture, experience, likes, recipes } = d
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card p-4 bg-light" >
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className='mb-3'>{name}</h5>
                    <p className='fw-bolder text-secondary mb-1'>Experiance: <span className='fw-normal'>{experience} years</span></p>
                    <p className='fw-bolder text-secondary mb-1'>Recipes: <span className='fw-normal'>{recipes.length}</span></p>
                    <p className=' text-secondary mb-1 fs-5'>{likes} <AiOutlineLike/></p>
                    <a href="#" className="btn btn-warning mt-4">View Recipes</a>
                </div>
            </div>
        </div>
    );
};

export default Card;