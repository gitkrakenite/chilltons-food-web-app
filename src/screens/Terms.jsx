import React from "react";
import { Link } from "react-router-dom";
import "./terms.css";

const Terms = () => {
  return (
    <div className="terms_wrapper">
      <Link to={"/register"}>
        <strong
          style={{
            backgroundColor: "#f02d34",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Back
        </strong>
      </Link>
      <h2>Please read our Terms and Conditions before proceeding</h2>
      <div className="terms_seller">
        <h4>Terms for Seller</h4>
        <ol>
          <li>
            You are required to give back 4% of every product you sell back to
            the platform. MPESA -- send cash -- 07 9855 6471.
          </li>
          <li>You are required to update us on your stock quantity daily.</li>
          <li>You are required to give transport to your client.</li>
          <li>
            Check your messages for orders and act on them as quickly as
            possible.
          </li>
          <li>No refunds for the 4% cut commission of the product.</li>
          <li>
            You are required to read your product reviews for better service to
            clients
          </li>
          <li>
            Products can take a maximum of 4hrs before they are live. Feel free
            to contact us if time limit elapses
          </li>
          <li>Provide a receipt after delivery to client.</li>
        </ol>
      </div>
      <div className="terms_buyer">
        <h4>Terms for Buyer</h4>
        <ol>
          <li>No refunds through this platform.</li>
          <li>
            After delivery check the quality and quantity of the product before
            paying.
          </li>
          <li>
            You are required to report any scammers through our contact options.
          </li>
          <li>Products are only delivered to the address you stated.</li>
          <li>You cannot cancel an order after 60 seconds.</li>
          <li>Check your logged in email for shipping fee</li>
          <li>
            We are authorised to cancel your order if any of your details is
            false.
          </li>
          <li>
            You will be called once the package arrives at the stated location.
          </li>
          <li>
            You are in no way to waste the time of the delivery personnel or the
            seller. This will lead to serious consequences.
          </li>
          <li>Shop safe, stay safe and shop till you drip.</li>
        </ol>
      </div>

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
            <li>Your phone number - to get orders</li>
            <li>Location of product</li>
            <li>Transport rates for your clients</li>
          </ol>
          <p>
            We expect <span className="high_text">4%</span> of the product price
            if you are a one time seller
          </p>
          <p>If you are a long-term seller, contact us for better deal.</p>
          <p>
            You are required to offer reliable{" "}
            <span className="high_text">transport</span> to clients.
          </p>
          <p>
            <b>NOTE: </b>Check your{" "}
            <span className="high_text">phone messages frequently</span> for
            order request and further communication from us
          </p>
        </div>
        {/* Buyer */}
        <div className="info_buyer">
          <h4>How to buy ?</h4>
          <ol>
            <li>Login</li>
            <li>Search & Select your choice</li>
            <li>Add to cart and checkout </li>
            <li>
              We offer <span className="high_text">transport</span> at a price
            </li>
            <li>We pay cash BUT M-PESA is allowed</li>
            <li>Check your email for shipping fee</li>
            <li>
              We{" "}
              <span className="high_text">
                will email you once order is received and processed
              </span>{" "}
            </li>
            <li>All relevant details will be emailed to you.</li>
            <li>
              Sit back and relax.{" "}
              <span className="high_text">We will call</span> when we deliver to
              your address
            </li>
            <li>Only pay after delivery and inspection</li>
          </ol>
          <p>Contact us for further info or clarifications.</p>
          <p>
            Remember to check the email you logged in with for
            <span className="high_text">confirmation and shipping fee</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
