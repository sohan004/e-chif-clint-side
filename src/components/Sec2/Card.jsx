import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Card = ({ d }) => {
    const { name, picture, experience, likes, recipes, id } = d
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card p-4 bg-light" >
                {/* <img src={picture} className="card-img-top" alt="..." /> */}
                <LazyLoadImage src={picture} loading='lazy'  width='100%' effect='blur' placeholderSrc={picture} />
                <div className="card-body">
                    <h5 className='mb-3'>{name}</h5>
                    <p className='fw-bolder text-secondary mb-1'>Experiance: <span className='fw-normal'>{experience} years</span></p>
                    <p className='fw-bolder text-secondary mb-1'>Recipes: <span className='fw-normal'>{recipes.length}</span></p>
                    <p className=' text-secondary mb-1 fs-5'>{likes} <AiOutlineLike /></p>
                    <Link to={`/chef/${id}`} className="btn btn-warning mt-4">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;