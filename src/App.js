import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [liczba2, setliczba] = useState('');

  function fib(n) {

    if (n > 0 && n < 31) {
      if (n < 3) return 1;
      return fib(n - 1) + fib(n - 2);
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wyznaczanie liczby Fibonacciego.
        </p>
        <label for="name">Liczba (od 1 do 30):</label>
        <input type="number" id="liczba" name="liczba" maxlength="2" onChange={e => setliczba(fib(e.target.value))} />
        <label>{liczba2}</label>
      </header>
    </div>
  );
}


export default App;
