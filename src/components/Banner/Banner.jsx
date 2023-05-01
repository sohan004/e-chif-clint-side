import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
    const getData = useLoaderData()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='row g-3 d-flex align-items-center'>
            <div className="col-12 col-md-6">
                <div >
                    <h1 className='display-4 mb-3 fw-semibold'>
                        Cook Like a Chef: Expert Techniques and <span className='text-warning fw-bolder'>Delicious Recipes</span>
                    </h1>
                    <p >Welcome to our chef-led website, where we offer a wealth of culinary knowledge, inspiration, and community to help you elevate your cooking game. Our website is designed to provide food lovers with expert recipes, cooking tips, and techniques from a professional chef, along with the tools and resources you need to master the art of cooking.</p>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        autoPlay={true}

                    >
                        {getData.map(d => <div key={d.id}><img src={d.picture} className='rounded img-fluid w-100' alt="" /></div>)}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;