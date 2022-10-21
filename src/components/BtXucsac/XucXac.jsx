import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    const { mangXucXac, isTai } = this.props;
    return (
      <>
        <div className=" flex gap-40 justify-center mt-28 ">
          <div
            className={`w-[120px] h-32 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-40  cursor-pointer ${
              isTai ? "bg-red-500" : "bg-blue-500"
            }`}
            onClick={() => {
              this.props.dispatch({
                type: "DAT_CUOC",
                payload: true,
              });
            }}
          >
            Tài
          </div>
          <div className=" flex ">
            {mangXucXac.map((item, index) => {
              return (
                <img
                  key={index}
                  className="w-[120px] object-cover object-center"
                  src={item.hinhAnh}
                  alt=""
                />
              );
            })}
            {/* <img
              className="w-[120px] object-cover object-center"
              src="./images/BTXucXac/1.png"
              alt=""
            />
            <img
              className="w-[120px] object-cover object-center "
              src="./images/BTXucXac/2.png"
              alt=""
            />
            <img
              className="w-[120px] object-cover object-center "
              src="./images/BTXucXac/3.png"
              alt=""
            /> */}
          </div>
          <div
            className={`w-[120px] h-32 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-40  cursor-pointer ${
              isTai ? "bg-blue-500" : "bg-red-500"
            }`}
            onClick={() => {
              this.props.dispatch({
                type: "DAT_CUOC",
                payload: false,
              });
            }}
          >
            Xỉu
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return {
    mangXucXac: rootReducers.baiTapXacXac.mangXucXac,
    isTai: rootReducers.baiTapXacXac.isTai,
  };
};
export default connect(mapStateToProps)(XucXac);
