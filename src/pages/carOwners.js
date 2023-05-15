import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './carOwners.css'
import { PostCar } from "../subpages/postCar";

export const CarOwners = () => {
  const [activeForm, setActiveForm] = useState(null)
  
  const handlePostCarClick = (event) => {
    event.preventDefault();
    setActiveForm("postcar")
  }
  let form;
  if (activeForm === "postcar") {
    form = <PostCar />
    
  }
  else {
    form= <h3>Welcome</h3>
  }
  return <div className="welcome">
    <h3>Welcome to this free site where we connect you with clients all over the country, <br />
        On this page you can post the car that you want it get booked <br />
        Once a client books your car, we will connect the client to chat with you <br />
      All payments will be done via  the app</h3>
    <h4>You will get your payments via mpesa weekly after processing</h4>
    <div className="postcar">
      
      <div className="subdiv">
      <button type=""
        >
          <Link to="/postcar" onClick={handlePostCarClick}>Post a car</Link>
      </button>
      </div>
      <div className="subdiv">
        {form}
      </div>
    </div>
  </div>
    
  

};
