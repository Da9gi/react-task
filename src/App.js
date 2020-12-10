import './App.css';
import {Title} from "./react-task#1/Styles";
import GameBoard from "./react-task#1/gameBoardHome";

function App() {
  return (
    <div className="App">
    <header className="App-header">
       <Title>Game Board</Title> 
       <GameBoard/>
       </header>
    </div>
  );
}

export default App;
