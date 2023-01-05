import React,{useState} from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""
  });

  const InputEvent=(event)=>{

    const {name,value} =event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      }
    })
  }

  const formSubmit =(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}, number is ${data.phone} , Email is ${data.email} and Message is ${data.msg}`);
  };
  return (
    <>
      <div className="my-4">
        <h2 className=" text-center fs-2 text-secondary">Contact Us</h2>
      </div>
      <div className="container mt-4">
        <div className="row col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
              name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
              name="phone"
              value={data.phone}
              onChange={InputEvent}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
              name="email"
              value={data.email}
              onChange={InputEvent}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
              name="msg"
              value={data.msg}
              onChange={InputEvent}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="col-12"><button className="btn btn-outline-primary" type="submit"> Submit Form</button></div>
          </form>
        </div>
      </div>
    </>
  );
}
