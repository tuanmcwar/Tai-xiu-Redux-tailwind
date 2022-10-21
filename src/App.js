import "./App.css";
import BT from "./components/BT/BT";
import BTPhoneRedux from "./components/BTPhoneRedux/BTPhoneRedux";
import BTXeRedux from "./components/BTXeRedux/BTXeRedux";
import BTXucsac from "./components/BtXucsac/BTXucsac";

function App() {
  return (
    <div className="App">
      {/* <BTXeRedux></BTXeRedux> */}
      {/* <BTPhoneRedux></BTPhoneRedux> */}
      <BTXucsac></BTXucsac>
    </div>
  );
}

export default App;
