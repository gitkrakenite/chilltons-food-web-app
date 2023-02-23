import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  // Additional details
  // const [country, setCountry] = useState(shippingAddress.country);
  // const [country, setCountry] = useState(shippingAddress.country);
  // const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            autoComplete="false"
            minLength="4"
            maxlength="25"
            name="hidden"
            placeholder="Enter address or House No"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            minLength="4"
            maxlength="15"
            placeholder="Specifics i.e PAC or TV ROOM"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            minLength="4"
            maxlength="15"
            placeholder="Enter phone number"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            minLength="4"
            // maxlength="30"
            placeholder="Further shipping info"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
