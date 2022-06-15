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
          <h2>TECH</h2>
        </div>
        <h6>Coming Soon</h6>
      </div>
      <div className="sec_wrap">
        <img
          src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="BannerPic"
        />
        {/* <img
          src="https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="BannerPic"
        /> */}
      </div>
      <div className="third_wrap">
        <p>Valerian best sell</p>
        <h2>Flash Sale</h2>
        <p>We have exciting news. Follow us to stay tuned</p>
      </div>
    </div>
  );
};

export default CalltoActionSection;
