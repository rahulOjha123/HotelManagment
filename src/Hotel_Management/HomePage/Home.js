import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="home_page">
      <div className="main_page">
        <Navbar></Navbar>
        <div className="in_div">
          <p>WellCome To Website</p>
          <p className="pp"style={{fontSize:"17px",color:"white"}}>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. Learn
          </p>
         
          < button className="btn btn-danger">Go Visite</button>
          <Link exact to="">go to main page</Link>
         
        </div>
      </div>
      <div className="cards">
            <Cards></Cards>
      </div>
      <div className="dow_img">
                <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="alt="error"className="img_big"></img>
      </div>
    </div>
  );
}

export default Home;
