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
            src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="burger"
          />
          <p>
            A huge single or triple pizza with all the fixings, cheese, chicken,
            tomato, onions and special sauce or mayonnaise!.{" "}
          </p>
        </div>
        <div className="testCenterCont">
          <img
            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="food"
          />
          <p>
            Eat with relish and take a tentative mouthful. We give you what you
            paid for. That good delightful bite
          </p>
        </div>
        <div className="testLastCont">
          <img
            src="https://images.pexels.com/photos/4519050/pexels-photo-4519050.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="juice"
          />
          <p>
            Take a trip down the healthy side of the diet. Our salads are
            crafted carefully so that nothing is too much.
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
