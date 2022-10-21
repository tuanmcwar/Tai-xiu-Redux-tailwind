const stateDefaults = {
  phoneSelected: {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./images/phones/meizuphone.jpg",
  },
  cart: [
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./images/phones/meizuphone.jpg",
      soLuong: 1,
    },
  ],
};
export const BTPhone = (state = stateDefaults, action) => {
  switch (action.type) {
    case "PRODUCT_SELECTED": {
      state.phoneSelected = action.payload;
      return { ...state };
    }
    case "ADD_TO_CARD": {
      const data = { ...state };
      const index = data.cart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );
      console.log(index);
      if (index !== -1) {
        data.cart[index].soLuong += 1;
      } else {
        data.cart.push({ ...action.payload, soLuong: 1 });
      }
      return { ...data, cart: [...data.cart] };
    }
    case "REMOVE_CART": {
      const data = [...state.cart];
      // c1
      // const index = data.cart.findIndex((item) => item.maSP === action.payload);
      // data.splice(index, 1);
      // return { ...data, cart: [...data.cart] };
      // c2
      const value = data.filter((item) => item.maSP !== action.payload);
      return { ...state, cart: value };
    }
    case "QUANTITY_CART": {
      //
      const data = [...state.cart];
      const index = data.findIndex((item) => item.maSP === action.payload.maSP);

      // console.log(data[index]);
      // data[index].soLuong += action.payload.quantity;
      if (data[index].soLuong > 1 || action.payload.quantity > 0) {
        data[index].soLuong += action.payload.quantity;
      } else if (window.confirm("Bạn có muốn xoá sản phẩm này không?")) {
        data.splice(index, 1);
      }

      return { ...state, cart: data };
    }
    default:
      return state;
  }
};
