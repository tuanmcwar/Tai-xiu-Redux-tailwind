import React, { Component } from "react";
import ChiTietSP from "./ChiTietSP";
import GioHang from "./GioHang";
import PhoneList from "./PhoneList";
import data from "./data.json";
import Gio from "./Gio";

export default class BTPhoneRedux extends Component {
  render() {
    return (
      <div className="container">
        <Gio></Gio>
        <PhoneList data={data}></PhoneList>
        <ChiTietSP></ChiTietSP>
        <GioHang></GioHang>
      </div>
    );
  }
}
