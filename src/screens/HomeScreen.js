import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import "./home.css";
import { Link } from "react-router-dom";
import Testimonials from "../components/homeComponents/testimonials/Testimonials";
import Userfeed from "../components/homeComponents/userFeedback/Userfeed";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      {/* Link to services */}
      {/* <div
        className="linkServices"
        style={{
          backgroundColor: "#f02d34",
          color: "#fff",
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <a
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "20px",
          }}
          href="https://valerian-daystar-services.netlify.app"
        >
          {" "}
          Want to see our services. Click anywhere here 😊👏😜
        </a>
      </div> */}
      <Header />
      {/* Announcement */}

      <div
        style={{
          marginTop: "12px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#f02d34",
          paddingLeft: "10px",
          color: "white",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Hello. Kindly note that we only deliver from 8:00AM to 8:00PM. Delivery
        off campus is ksh.50 but free within.
      </div>

      {/* Hero section */}
      <div className="hero_section" style={{ marginTop: "20px" }}>
        <div className="hero_wrapper">
          <h1 className="bounce-top">Chilltons</h1>
          <h6>Powered by DITA</h6>
          <p className="hero_splash" style={{ marginBottom: "15px" }}>
            Experience the best cuisines
          </p>
        </div>
      </div>
      {/* <Link to={"/terms"}>
            <span className="tracking-in-contract" style={{ color: "#fff" }}>
              Please read our terms
            </span>
          </Link> */}
      {/* End Hero section */}
      <div className="bestpic_text">
        <h4>Trending Delicacies on our list</h4>
        <p>Always ahead. We've got you in mind. You want, we have</p>
      </div>
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Testimonials />
      <Userfeed />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
