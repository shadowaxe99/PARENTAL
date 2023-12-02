import React, { useState } from 'react';
import './NumberInput.css';

interface NumberInputProps {
  maxNumber: number;
  onNumberChange: (newNumber: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ maxNumber, onNumberChange }) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(maxNumber, Math.max(0, parseInt(event.target.value, 10) || 0));
    setInputValue(newValue);
    onNumberChange(newValue);
  };

  return (
    <div className="number-input-container">
      <input
        type="number"
        className="number-input"
        value={inputValue}
        onChange={handleInputChange}
        min={0}
        max={maxNumber}
        aria-label="Number input"
      />
    </div>
  );
};

export default NumberInput;