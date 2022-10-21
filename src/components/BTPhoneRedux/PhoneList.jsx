import React, { Component } from "react";
import Phone from "./Phone";

export default class PhoneList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-4" key={item.maSP}>
              <Phone product={item}></Phone>
            </div>
          );
        })}
      </div>
    );
  }
}
