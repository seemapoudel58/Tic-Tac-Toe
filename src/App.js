
import './App.css';
import Board from './components/board';
import Header from './components/Header';
import Reset from './components/reset';


function App() {
    return(
        <div className='App'>
            <Header />
            <Board />
            <Reset />
        </div>
    )
  
}

export default App;
