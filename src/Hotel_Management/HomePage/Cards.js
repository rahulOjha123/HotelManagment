import React from "react";

function Cards() {
  return (
    <div className="card_main">
      <div className="card" style={{ width: "15rem",display:"inline-block",margin:"10px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2s1HqRzHFbUwQUbN76vFArgKhRKAKBDNa2htzf3P229xihTVgAji2JGvoyQiSmFnu49w&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <span  style={{color:"gray"}}>$200</span><br></br>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "15rem",display:"inline-block",margin:"10px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGLqXfOsU4KbxOmY7pJbzWXCM3yVpzlP3BoK3x5nnYVfN2MPC5Ks8dFbUG-HWiMj0NIg&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <span  style={{color:"gray"}}>$200</span><br></br>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "15rem",display:"inline-block",margin:"10px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKMGGJwbzlySGjbls7bjUTScIwuuNjTN-4pcc-QCw7zQZz7XZk-45Qeq5EpKnivoES18&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <span  style={{color:"gray"}}>$200</span><br></br>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "15rem",display:"inline-block",margin:"10px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkeN-QBsuVrDMDML8ns7mnp-aqG4YcfY4cFR3Hlq6i6sxQCt3hfmbAkKPanDEcUnRiX8&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <span  style={{color:"gray"}}>$200</span><br></br>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Cards;
