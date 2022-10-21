import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const {
      ketQua: { isTai, soBanThang, soBnaChoi },
    } = this.props;

    return (
      <>
        <div className="mt-11">
          <p className="text-40 font-bold">
            Bạn chọn:{" "}
            <span className="font-bold text-[60px]">
              {isTai ? "Tài" : "Xỉu"}
            </span>
          </p>
          <p className="text-40 font-bold">Số bàn thắng: {soBanThang}</p>
          <p className="text-40 font-bold">Số bàn chơi: {soBnaChoi}</p>
          <button
            className="bg-green-500 px-6 py-7 text-30 text-white rounded-sm hover:bg-green-700"
            onClick={() => {
              this.props.dispatch({
                type: "PLAY",
              });
            }}
          >
            PLAY
          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return {
    ketQua: rootReducers.baiTapXacXac,
  };
};
export default connect(mapStateToProps)(KetQua);
