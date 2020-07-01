import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch} from '@fortawesome/free-solid-svg-icons'
 
import axios from "axios";
import GuestOrderStatus from "./GuestOrderStatus";
import { data } from "jquery";
import "./Styling.css";

import StoreCapability from "./StoreCapability";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItems: {
        firstName: "",
        lastName: "",
        email: "",
      },
      allItems: [],
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    let items = { ...this.state.searchItems };
    items[name] = value;

    this.setState({
      searchItems: items,
    });
    console.log(this.state.searchItems);
  };

  handleClick = () => {
    console.log(this.state.searchItems.firstName);
    const { firstName, lastName, email } = this.state.searchItems;
    let url = "";
    if (firstName !== "" && lastName !== "" && email !== "") {
      url = firstName + "/" + lastName + "/" + email;
    } else if (firstName !== "" && lastName !== "") {
      url = firstName + "/" + lastName;
    } else if (firstName !== "") {
      url = firstName;
    } else if (lastName !== "") {
      url = lastName;
    }
    axios
      .get(`http://localhost:8080/body-file/${url}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          allItems: data,
        });
        console.log(this.state.allItems);
      });

    /*
      .catch((error) => {
        console.log(error);
      });
      */
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-inline m-3">
            <input
              type="text"
              className="m-2"
              placeholder="firstname"
              name="firstName"
              onChange={this.handleChange}
            />

            <input
              type="text"
              className="m-2"
              placeholder="Lastname"
              name="lastName"
              onChange={this.handleChange}
            />

            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />

            <button
              type="submit"
              onClick={this.handleClick}
              className="btn btn-default m-2 p-1"
            >
             <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <hr className="ruler"></hr>
          <div id="store">
          <StoreCapability />
          </div>
          <GuestOrderStatus allItems={this.state.allItems} />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
