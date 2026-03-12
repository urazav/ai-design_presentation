/**
 * Magnetiq Bank — Geometry / Radius Tokens
 *
 * Stability  0px   → Inputs, tables — sharp, structured
 * Standard   8px   → Cards, modals — balanced, trustworthy
 * Magnetic   100px → Buttons, badges, pills — dynamic, fluid
 */

export const radius = {
  stability: '0px',
  standard:  '8px',
  magnetic:  '100px',
} as const;

export type RadiusKey = keyof typeof radius;
