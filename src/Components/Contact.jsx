import React from "react";
import Button from "../layouts/Button";

const Contact = () => {

    const backgroundColor = "bg-blue-500"

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center items-center my-8 min-h-screen md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col lg:flex-row justify-between w-full " >
        <form className="Left-Section w-full lg:w-2/5 space-y-5 bg-[#f2f2f2] p-5 rounded-xl">
          <h1 className="text-2xl lg:text-4xl font-semibold md:text-center">Contact Form</h1>
          <div className="form-group flex flex-col">
          <label htmlFor="userName">Full Name</label>
          <input
           className="py-3 px-2 rounded-lg hover:shadow-md transition-all  "
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="userEmail">Email Id</label>
          <input
          className="py-3 px-2 rounded-lg hover:shadow-md transition-all  "
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Enter Your Email Id"
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="userMessage">Write Message</label>
          <textarea
          className="py-3 px-2 rounded-lg hover:shadow-md transition-all  "
            cols="30"
            rows="3"
            name="userName"
            id="userName"
            placeholder="Enter Message"
          >

          </textarea>
        </div>

        <div className="flex flex-row justify-center">
            <Button backgroundColor={backgroundColor} title="Submit"   />
        </div>

        </form>
      {/* Right section */}
      <div className="flex flex-col w-full  lg:w-2/4 my-4 items-center" >
        <img
        className="rounded-lg " 
        src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contact_image" />
        <p className="font-medium text-gray-400 mt-5">Wea are here to solve your problem , with any regarding problem you can contact us , we ensure you that we will hear you</p>
      </div>
        </div>
    </div>
  );
};

export default Contact;
