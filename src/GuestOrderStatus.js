import React, { Component } from "react";
import "./Styling.css"
import $ from 'jquery';
import Popper from 'popper.js';

class GuestOrderStatus extends Component {
  render() {
    console.log(this.props);
    const { allItems } = this.props;
    let rows = allItems.map((item) => (
      <tr key={item.first}>
        <td>{item.first}</td>
        <td>{item.last}</td>
        <td>{item.email}</td>
      </tr>
    ));
    return (
      <div  >
        <div className="btn-group w-100 dropdown position-static">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
        Guest Order Status
          </button>
         
           <div className="dropdown-menu mt-0 w-100 " >
               <div className="table-responsive dropdown-item">
            <table className="table table-bordered  ">
              <thead >
                <tr >
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody >{rows}</tbody>
            </table>
            </div>
            </div>
            
       
        </div>
      </div>
    );
  }
}

export default GuestOrderStatus;
