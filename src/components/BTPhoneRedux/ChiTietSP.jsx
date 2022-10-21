import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTietSP extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <img className="img-fluid" src={phone.hinhAnh} alt="..." />
        </div>
        <div className="col-8">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{phone.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{phone.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{phone.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{phone.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{phone.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{phone.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return { phone: rootReducers.BTPhone.phoneSelected };
};
export default connect(mapStateToProps)(ChiTietSP);
