import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStarsRating from 'react-awesome-stars-rating';

const Recipes = ({ r }) => {
    const { recipeName, cookingMethod, img, ingredients, ratings } = r

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        toast.success(`My Favoroute Recipe is ${recipeName}`, {
            position: toast.POSITION.TOP_CENTER
        });
        setIsDisabled(true);
    };
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
                    <h5 className="card-text"><ReactStarsRating isEdit={false}  size={20} value={ratings} /> {ratings}</h5>
                    
                    <button disabled={isDisabled} onClick={handleClick} className="btn btn-warning mt-3 position-sticky top-100">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;