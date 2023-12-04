import React from 'react';
import './NumberVisualizer.css';

interface NumberVisualizerProps {
  value: number;
  max: number;
}

const NumberVisualizer: React.FC<NumberVisualizerProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="number-visualizer" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} role="progressbar">
      <div className="number-visualizer__bar" style={{ width: `${percentage}%` }}></div>
      <span className="number-visualizer__label">{value} / {max}</span>
    </div>
  );
};

export default NumberVisualizer;