import React from "react";

const CalltoActionSection = () => {
  return (
    // <div className="subscribe-section bg-with-black">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xs-12">
    //         <div className="subscribe-head">
    //           <h2>DO you need more tips?</h2>
    //           <p>Sign up free and get the latest tips.</p>
    //           <form className="form-section">
    //             <input placeholder="Your Email..." name="email" type="email" />
    //             <input value="Yes. I want!" name="subscribe" type="submit" />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="banner_wrap">
      <div className="first_wrap">
        <p>20% OFF</p>
        <div style={{ marginLeft: "20px" }}>
          <h1>BEST</h1>
          <h2>DEALS</h2>
        </div>
        <h6>Coming Soon</h6>
      </div>
      <div
        className="sec_wrap"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {/* <img
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
          src="https://images.pexels.com/photos/9706064/pexels-photo-9706064.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="BannerPic"
        /> */}
        <img
          style={{ width: "90%", height: "390px", objectFit: "cover" }}
          src="https://images.pexels.com/photos/6193631/pexels-photo-6193631.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="BannerPic"
        />
      </div>
      <div className="third_wrap">
        <p>Chilltons best sell</p>
        <h2>Flash Sale</h2>
        <p>Check your email for exciting offers </p>
      </div>
    </div>
  );
};

export default CalltoActionSection;
