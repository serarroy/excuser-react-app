import './App.css';
import React, {useState} from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import Header from './components/Header';

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Header />
      {
        !start? <LandingPage setStart={setStart} />: <MainPage />
      }
    </div>
  );
}

export default App;
