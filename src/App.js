import "./App.css";
import { Title } from "./react-task#1/Styles";
// import ReduxCounter from "./redux/reduxStore";
// import GameBoard from "./react-task#1/gameBoardHome";
// import Store from "./redux/react-redux-task#2/stores";
// import ShoppingCart from "./redux/react-redux-task#2";
import { Provider } from "react-redux";
import ShoppingCart from "./redux/shoppingCart/index";
import Store from "./redux/shoppingCart/stores/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={Store}>
          <Title color="palevioletred">Shopping Cart</Title>
          <ShoppingCart />
        </Provider>
      </header>
    </div>
  );
}

export default App;
