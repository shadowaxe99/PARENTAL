// src/utils/helpers.ts

export const calculatePercentage = (value: number, maxValue: number): number => {
  if (maxValue <= 0) {
    throw new Error("maxValue must be greater than 0");
  }
  return (value / maxValue) * 100;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
};