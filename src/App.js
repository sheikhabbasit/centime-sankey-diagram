import "./App.css";
import ChartRepresentation from "./components/ChartRepresentation/ChartRepresentation";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ChartRepresentation />
      </div>
    </Provider>
  );
}

export default App;
