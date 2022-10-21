import { combineReducers, createStore } from "redux";
import * as reducers from "./reducers";

const rootReducers = combineReducers({
  // C1
  // demoRedux,
  // baiTapXe,
  // baiTapPhone

  // C2
  ...reducers,
  //   BTXe: (state = "./images/products/black-car.jpg", action) => {
  //     console.log(action);
  //     switch (action.type) {
  //       case "CHANGE_COLOR": {
  //         state = `./images/products/${action.payload}-car.jpg`;
  //         return state;
  //       }
  //       default:
  //         return state;
  //     }
  //     // return state;
  //   },
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
