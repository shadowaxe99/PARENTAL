import React from 'react';
import './NumberVisualizer.css';

interface NumberVisualizerProps {
  value: number;
  max: number;
  color?: string;
}

const NumberVisualizer: React.FC<NumberVisualizerProps> = ({ value, max, color }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="number-visualizer" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} role="progressbar">
      <div className="number-visualizer__bar" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      <span className="number-visualizer__label">{value} / {max}</span>
    </div>
  );
};

export default NumberVisualizer;