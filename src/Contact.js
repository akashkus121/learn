
import React, { useState } from "react";
import  img  from '../src/image/kisspng-email-address-earthsoft-inc-logo-mobile-phones-opentext-5b3c08c04780a4.2168374015306610562929.jpg';
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "", // Changed to lowercase
    phone: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevValue) => {
      return {
        ...prevValue, // spread operator
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert(
      `Form submitted: ${data.fname} ${data.lname} ${data.email} ${data.phone}`
    );
  };

  return (
    <>
      <div className="container contact">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info" >
                <img src={img} alt="sdfs"/>
                <h2>Contact Us</h2>
                <h4>We would love to hear from you!</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">
                    First Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      name="fname"
                      value={data.fname}
                      onChange={InputEvent} // Fixed typo here
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="lname">
                    Last Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lname"
                      value={data.lname}
                      onChange={InputEvent} // Fixed typo here
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email" // Changed to lowercase
                      value={data.email} // Changed to lowercase
                      onChange={InputEvent} // Fixed typo here
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="phone">
                    Phone:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent} // Fixed typo here
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Comment:
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
