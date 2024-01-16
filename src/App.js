import React, { useState } from 'react';
import './App.css';
import Board from './components/board';
import Header from './components/Header';
import Reset from './components/reset';


function App() {
    const [resetFlag, setResetFlag] = useState(false);
    const handleResetClick= (e)=>{
        e.preventDefault();
        setResetFlag(!resetFlag);

        
    }
    return(
        <div className='App'>
            <Header />
            <Board resetFlag={resetFlag} setResetFlag={setResetFlag}/>
            <Reset title="Reset" onClick={handleResetClick}/>
        </div>
    )
  
}

export default App;
