import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStarsRating from 'react-awesome-stars-rating';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                {/* <LazyLoad height="100%" width="100%" >
                    <img src={img} className="card-img-top" alt="..." />
                </LazyLoad> */}
                <LazyLoadImage src={img} loading='lazy' height={img.height} width="100%" effect='blur' placeholderSrc={img} />
                <div className="card-body">
                    <h4 className="card-title">{recipeName}</h4>
                    <h6 className='mt-4'>Ingredients</h6>
                    <ul>
                        {ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                    </ul>
                    <p className="card-text"><span className='fw-bolder'>Coocking Method:</span> {cookingMethod}</p>
                    <h5 className="card-text"><ReactStarsRating isEdit={false} size={20} value={ratings} /> {ratings}</h5>

                    <button disabled={isDisabled} onClick={handleClick} className="btn btn-warning mt-3 position-sticky top-100">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;