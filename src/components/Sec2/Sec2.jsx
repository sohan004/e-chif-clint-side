import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Sec2 = () => {
    const getData = useLoaderData()
    console.log(getData)
    return (
        <>
            <h1 className="fw-bolder text-center mt-5">Our Chef</h1>
            <div className="row g-3">
                {getData.map(d => { <Card key={d.id} d={d}> </Card> })}
            </div>
        </>
    );
};

export default Sec2;