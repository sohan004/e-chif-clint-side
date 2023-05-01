import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Sec2 = () => {
    const getData = useLoaderData()
    return (
        <>
            <h1 className="fw-bolder text-center mt-5 mb-3">Our Chef</h1>
            <div className="row g-4">
                {getData.map(d => <Card key={d.id} d={d}></Card>)}
            </div>
        </>
    );
};

export default Sec2;