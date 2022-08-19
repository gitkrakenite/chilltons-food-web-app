import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonialsCont">
      <h2>What do we frequently sell ? </h2>
      <div className="testDivider"></div>
      <div className="testWrapper">
        <div className="testFirstCont">
          <img
            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="burger"
          />
          <p>
            A huge single or triple burger with all the fixings, cheese,
            lettuce, tomato, onions and special sauce or mayonnaise!.{" "}
          </p>
        </div>
        <div className="testCenterCont">
          <img
            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="food"
          />
          <p>
            Eat with relish, toy with our food, or take a tentative mouthful.
            Cooked with love and care.
          </p>
        </div>
        <div className="testLastCont">
          <img
            src="https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="juice"
          />
          <p>
            They say juicing can reduce your risk of cancer, boost your immune
            system. Well we add great taste to the list
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
