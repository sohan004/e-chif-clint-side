import React from 'react';
import { GiChickenLeg } from "react-icons/gi";
import { FaFish, FaCarSide } from "react-icons/fa";

const Sec3 = () => {
    return (
        <div>
            <h1 className="fw-bolder text-center mt-5 pt-5 mb-4">Why Choose Our Favorite Food</h1>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center p-4 border border-warning rounded-3 h-100">
                        <GiChickenLeg className='display-4 rounded-circle text-warnint p-2 bg-warning bg-opacity-50' />
                        <h4 className='my-3'>Qualityfull Food</h4>
                        <p>Grilled Salmon: Grilled salmon is a delicious and healthy dish that is easy to prepare. The fish is marinated in a mixture of olive oil, lemon juice, garlic, and herbs, then grilled until it is tender and flaky. The result is a dish that is rich in omega-3 fatty acids and has a mild, slightly sweet flavor that pairs well with a variety of sides..</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center p-4 border border-warning rounded-3 h-100">
                        <FaFish className='display-4 rounded-circle text-warnint p-2 bg-warning bg-opacity-50' />
                        <h4 className='my-3'>Healthy Food</h4>
                        <p>Pad Thai: Pad Thai is a popular Thai noodle dish that is known for its sweet and savory flavor. The dish is made with stir-fried rice noodles, eggs, tofu, shrimp, and a variety of vegetables, then flavored with a sauce made from tamarind paste, fish sauce, palm sugar, and chili. The result is a dish that is both tangy and spicy, with a satisfying texture and a depth of flavor that will leave you wanting more.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center p-4 border border-warning rounded-3 h-100">
                        <FaCarSide className='display-4 rounded-circle text-warnint p-2 bg-warning bg-opacity-50' />
                        <h4 className='my-3'>Fast Delivery</h4>
                        <p>Delivery is a convenient and popular way to receive goods and services right to your doorstep. Whether it's food, packages, or other items, delivery services have become increasingly important in today's fast-paced world. With the rise of online shopping and mobile ordering, delivery has become easier than ever before.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec3;