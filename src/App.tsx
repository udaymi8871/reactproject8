import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementDecrement from './uday';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <IncrementDecrement
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
