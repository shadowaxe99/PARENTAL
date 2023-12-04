import React, { useState } from 'react';
import './NumberInput.css';

interface NumberInputProps {
  label?: string;
  value: number;
  onChange: (newNumber: number) => void;
  maxNumber: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, maxNumber }) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(maxNumber, Math.max(0, parseInt(event.target.value, 10) || 0));
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="number-input-container">
      {label && <label htmlFor="number-input">{label}</label>}
      <input
        id="number-input"
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