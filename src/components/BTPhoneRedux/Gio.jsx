import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Gio extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { cart } = this.props;
    const handleRemoveCart = (maSp) => {
      this.props.dispatch({
        type: "REMOVE_CART",
        payload: maSp,
      });
    };
    const handleQuantity = (maSP, quantity) => {
      this.props.dispatch({
        type: "QUANTITY_CART",
        payload: { maSP, quantity },
      });
    };
    const renderCart = () => {
      return cart.map((item) => {
        return (
          <tr key={item.maSP}>
            <td>{item.maSP}</td>
            <td>{item.tenSP}</td>
            <td>
              <img style={{ width: "80px" }} src={item.hinhAnh} alt="..." />
            </td>
            <td>{item.giaBan.toLocaleString()}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => handleQuantity(item.maSP, -1)}
              >
                -
              </button>
              <span className="mx-2">{item.soLuong}</span>
              <button
                className="btn btn-warning"
                onClick={() => handleQuantity(item.maSP, 1)}
              >
                +
              </button>
            </td>
            <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveCart(item.maSP)}
                // C2
                // onClick={() => {
                //     this.props.dispatch({
                //         type: 'REMOVE_CART',
                //         payload: item.maSP,
                //     })
                // }}
              >
                Xoá
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={this.openModal}>
            <i className="fa-solid fa-cart-arrow-down mr-2"></i>
            Giỏ hàng
            <span className="ml-3">
              ({cart.length} -{" "}
              {cart
                .reduce((total, item) => {
                  return (total += item.soLuong * item.giaBan);
                }, 0)
                .toLocaleString()}{" "}
              VNĐ )
            </span>
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã SP</th>
                  <th>Tên SP</th>
                  <th>Hình ảnh</th>
                  <th>Giá bán</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderCart()}</tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return {
    cart: rootReducers.BTPhone.cart,
  };
};
export default connect(mapStateToProps)(Gio);
