// Type definitions for NumberVisualizer and NumberInput components

export interface NumberVisualizerProps {
  value: number;
  max: number;
}

export interface NumberInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

export interface NumberState {
  currentValue: number;
  maxValue: number;
}