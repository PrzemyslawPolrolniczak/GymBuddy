import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Rozpocznij trening
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
