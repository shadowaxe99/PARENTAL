import React, { useState } from 'react';
import './styles/App.css';
import NumberVisualizer from './components/NumberVisualizer';
import NumberInput from './components/NumberInput';
import { useNumberState } from './hooks/useNumberState';

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [maxNumber, setMaxNumber] = useState<number>(100);
  const { numberState, setNumberState } = useNumberState(0, maxNumber);

  const handleNumberChange = (newNumber: number) => {
    setNumberState(newNumber);
  };

  const handleMaxNumberChange = (newMaxNumber: number) => {
    setMaxNumber(newMaxNumber);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Elysium Number Visualizer</h1>
      </header>
      <main>
        <NumberInput
          label="Set Number"
          value={numberState}
          onChange={handleNumberChange}
        />
        <NumberInput
          label="Set Maximum Number"
          value={maxNumber}
          onChange={handleMaxNumberChange}
        />
        <NumberVisualizer number={numberState} maxNumber={maxNumber} />
      </main>
    </div>
  );
};

export default App;