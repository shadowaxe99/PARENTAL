import { useState } from 'react';

interface UseNumberStateProps {
  initialNumber: number;
  maxNumber: number;
}

interface UseNumberStateReturn {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useNumberState = ({
  initialNumber,
  maxNumber,
}: UseNumberStateProps): UseNumberStateReturn => {
  const [number, setNumber] = useState<number>(initialNumber);

  const increment = () => {
    setNumber((prevNumber) => (prevNumber < maxNumber ? prevNumber + 1 : prevNumber));
  };

  const decrement = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : prevNumber));
  };

  const reset = () => {
    setNumber(initialNumber);
  };

  return { number, setNumber, increment, decrement, reset };
};