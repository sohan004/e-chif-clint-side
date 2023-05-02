import React from 'react';
import fd from '../../assets/food.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userPic from '../../assets/blank-profile-picture-gb085c28e0_1280.png'

const Sec4 = () => {
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
        <div>
            <h1 className="fw-bolder text-center mt-5 pt-5 mb-4">Our Happy Customer Says</h1>
            <div className="row g-4 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div>
                        <Carousel
                            swipeable={true}
                            draggable={false}
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
                            <div className='text-center p-4'>
                                <img src={userPic} style={{ width: '50px' }} className='img-fluid rounded-circle' alt="" />
                                <h3 className='my-3'>Md. sohan</h3>
                                <p>I tried the chicken tikka masala from my favorite Indian restaurant last night and it was absolutely delicious! The chicken was tender and flavorful, and the creamy tomato-based sauce had just the right amount of spice to make it interesting without being overpowering. The dish was served with fluffy basmati rice and warm, fresh naan bread. I can't wait to order it again!</p>
                            </div>
                            <div className='text-center p-4'>
                                <img src={userPic} style={{ width: '50px' }} className='img-fluid rounded-circle' alt="" />
                                <h3 className='my-3'>kabir</h3>
                                <p>I ordered a variety of sushi rolls from a new sushi restaurant in town and I have to say, I was disappointed. While the rolls looked beautiful, the fish was not very fresh and had a slightly unpleasant smell. The rice was also overcooked and had a mushy texture. Overall, the sushi was lacking in flavor and texture. I don't think I'll be ordering from this place again.</p>
                            </div>
                            <div className='text-center p-4'>
                                <img src={userPic} style={{ width: '50px' }} className='img-fluid rounded-circle' alt="" />
                                <h3 className='my-3'>pathan</h3>
                                <p>I recently ordered a slice of chocolate cake from a local bakery and it was amazing! The cake was moist and rich, with a deep chocolate flavor that was not too sweet. The frosting was smooth and creamy, and had just the right amount of sweetness to balance the richness of the cake. It was clear that the baker used high-quality ingredients and took great care in the preparation of the cake. I will definitely be returning to this bakery for more treats!</p>
                            </div>

                        </Carousel>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className='text-center'>
                        <img src={fd} alt="" className="img-fluid w-75 rounded-pill" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec4;