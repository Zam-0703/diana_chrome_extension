import React from 'react'
import Header from './Header';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <p>Options page</p>
        <p>
          Edit <code>src/views/Options/App.tsx</code> and save.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App