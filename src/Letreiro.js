
import React, { useEffect, useState } from 'react';
import './Letreiro.css';

function App() {
  const [displayText, setDisplayText] = useState('');
  const textToType = 'Venha estudar na Fatec';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + textToType[index]);
      index += 1;

      if (index === textToType.length) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{displayText}</h1>
      </header>
    </div>
  );
}

export default Letreiro;