import React, { Component } from "react";
import KetQua from "./KetQua";
import XucXac from "./XucXac";

export default class BTXucsac extends Component {
  render() {
    return (
      <div
        className="
        h-screen"
        style={{ background: "url(./images/BTXucXac/bgGame.png)" }}
      >
        <div className="max-w-7xl m-auto">
          <h1 className="text-center text-40">GAME XÚC XẮC</h1>
          <XucXac></XucXac>
          <KetQua></KetQua>
        </div>
      </div>
    );
  }
}
