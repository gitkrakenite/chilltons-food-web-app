import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />

      {/* Hero section */}
      <div className="hero_section">
        {/* THE LEFT SIDE */}
        <div className="text_wrap">
          <div className="hero_text">
            <h4> Valerian </h4>
            <h3>Powered by Valerian Hub</h3>
          </div>
          <p className="hero_splash">Shop till you drip </p>
          {/* <div className="hero_icons">
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <i class="fa fa-server" aria-hidden="true"></i>
            <i class="fa fa-camera" aria-hidden="true"></i>
            <i class="fa fa-bolt" aria-hidden="true"></i>
          </div> */}
        </div>
        {/* THE RIGHT SIDE */}
        <div className="right_wrapp">
          <div className="img_hero">
            <img src="https://images.pexels.com/photos/1996879/pexels-photo-1996879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="right_txt">
            <h4> Valerian </h4>
            <div className="hero_brand">
              <p>#Kenya's finest Stuff</p>
              <p>The best online shop.</p>
              <p>The best deals you.</p>
              <p>Transport option.</p>
            </div>
          </div>
        </div>
      </div>

      {/* End Hero section */}

      <div className="bestpic_text">
        <h4>Latest Products in the market</h4>
        <p>Always ahead. We've got you in mind. You want, we have</p>
      </div>
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />

      {/* More Information */}
      <div className="info_wrapper">
        {/* seller */}
        <div className="info_seller">
          <h4>Want to sell ?</h4>
          <p>
            <a href="mailto:daysseller@gmail.com">
              Click to email the following
            </a>
          </p>
          <ol>
            <li>Name of product</li>
            <li>One CLEAR pic</li>
            <li>Catchy description</li>
            <li>Price of product</li>
            <li>Quantity of product</li>
            <li>Your name</li>
            <li>Your EMAIL</li>
            <li>Location of product</li>
            <li>Transport rates for your clients</li>
          </ol>
          <p>
            We expect <span className="high_text">4%</span> of the product price
            if you are a one time seller
          </p>
          <p>If you are a long-term seller, contact us for better deal.</p>
          <p>
            You are required to offer{" "}
            <span className="high_text">transport</span> to clients.
          </p>
          <p>
            <b>NOTE: </b>Check your{" "}
            <span className="high_text">email frequently</span> for order
            request and further communication from us
          </p>
        </div>
        {/* Buyer */}
        <div className="info_seller">
          <h4>How to buy ?</h4>
          <ol>
            <li>Login</li>
            <li>Search & Select your choice</li>
            <li>Add to cart and checkout </li>
            <li>
              We offer <span className="high_text">transport</span> at a price
            </li>
            <li>We pay cash BUT M-PESA is allowed</li>
            <li>
              Your logged in{" "}
              <span className="high_text">email is very important</span>
            </li>
            <li>We will email you once order is received and processed </li>
            <li>All relevant details will be emailed to you.</li>
            <li>
              Sit back and relax.{" "}
              <span className="high_text">We will call</span> when we deliver to
              your address
            </li>
            <li>Only pay after delivery and inspection</li>
          </ol>
          <p>Contact us for further info or clarifications.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
