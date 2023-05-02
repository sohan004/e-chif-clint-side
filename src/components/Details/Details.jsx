import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';

const Details = () => {
    const { name, picture, experience, likes, recipes, id, description } = useLoaderData()
    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-4">
                    <div>
                        <img src={picture} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div>
                        <h2 className='fw-bold text-danger mt-4'>{name}</h2>
                        <p className='my-4'>{description}</p>
                        <p className='fw-bolder text-secondary'>Likes: <span className='fw-normal'>{likes}</span></p>
                        <p className='fw-bolder text-secondary'>Recipes: <span className='fw-normal'>{recipes.length}</span></p>
                        <p className='fw-bolder text-secondary'> years of experience: <span className='fw-normal'>{experience} years</span></p>

                    </div>
                </div>
            </div>
            <h3 className='mt-5 text-center border-bottom pb-2 border-2'>{name} Recipes</h3>
            <div className="row g-3 g-lg-5">
                {recipes.map((r, idx) => <Recipes key={idx} r={r}></Recipes>)}
            </div>
        </>
    );
};

export default Details;