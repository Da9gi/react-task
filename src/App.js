import "./App.css";
import { Title } from "./react-task#1/Styles";
import ReduxCounter from "./redux/reduxStore";
// import GameBoard from "./react-task#1/gameBoardHome";
// import Counter from "./redux/reduxStore";
// import Store from "./redux/react-redux-task#2/app/store";
// import ShoppingCart from "./redux/react-redux-task#2/shoppingHome";
// import { Provider } from "react-redux";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Title>Counter</Title>
                <ReduxCounter />
            </header>
        </div>
    );
}

export default App;
