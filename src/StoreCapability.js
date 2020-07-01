import React, { Component } from "react";
import "./card.css"

class StoreCapability extends Component {


  render() {
    return (
       <div className="container">
        <div className="row mb-3 "  >
          <div className="col p-1  ">
              <h3> Store Capabilities</h3>
              <ul className="list-inline p-3">
                  <li className="list-inline-item"> Store pickUp</li>
                  <li className="list-inline-item"> Ship from Store</li>
                  <li className="list-inline-item">Ship To Store</li>
                  <li className="list-inline-item">Drive Up Delivery</li>
                  <li className="list-inline-item">scheduled delivery</li>
              </ul>
          </div>
        </div>
        </div>
    );
  }
}

export default StoreCapability;
