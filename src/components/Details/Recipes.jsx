import React from 'react';
import { FaStar } from "react-icons/fa";

const Recipes = ({ r }) => {
    const { recipeName, cookingMethod, img, ingredients, ratings } = r
    return (
        <div className='col-12 col-md-6'>
            <div className="card p-4 h-100" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{recipeName}</h4>
                    <h6 className='mt-4'>Ingredients</h6>
                    <ul>
                        {ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                    </ul>
                    <p className="card-text"><span className='fw-bolder'>Coocking Method:</span> {cookingMethod}</p> 
                    <h4 className="card-text"><span className='fw-bolder text-warning'><FaStar/></span> {ratings}</h4> 
                    <button  className="btn btn-warning mt-3 position-sticky top-100">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;