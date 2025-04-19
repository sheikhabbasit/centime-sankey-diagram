import "./App.css";
import ChartRepresentation from "./components/ChartRepresentation/ChartRepresentation";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Form from "./components/Form/Form";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ChartRepresentation />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
