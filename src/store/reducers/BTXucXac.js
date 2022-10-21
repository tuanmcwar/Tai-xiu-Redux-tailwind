const stateDefaults = {
  isTai: true,
  soBanThang: 0,
  soBnaChoi: 0,
  mangXucXac: [
    {
      hinhAnh: "./images/BTXucXac/1.png",
      diem: 1,
    },
    {
      hinhAnh: "./images/BTXucXac/2.png",
      diem: 2,
    },
    {
      hinhAnh: "./images/BTXucXac/3.png",
      diem: 3,
    },
  ],
};
export const baiTapXacXac = (state = stateDefaults, { type, payload }) => {
  switch (type) {
    case "DAT_CUOC": {
      state.isTai = payload;
      return { ...state };
    }
    case "PLAY": {
      //   Math.floor(Math.random() * 6) + 1;
      let newMangXucXac = [];
      for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 6) + 1;
        const xucXac = {
          hinhAnh: `./images/BTXucXac/${number}.png`,
          diem: number,
        };
        newMangXucXac.push(xucXac);
      }
      const total = newMangXucXac.reduce((sum, item) => {
        return (sum += item.diem);
      }, 0);
      if (
        (state.isTai && total % 2 === 0) ||
        (!state.isTai && total % 2 !== 0)
      ) {
        state.soBanThang += 1;
      }
      state.soBnaChoi += 1;
      return { ...state, mangXucXac: newMangXucXac };
    }

    default:
      return { ...state };
  }
};
