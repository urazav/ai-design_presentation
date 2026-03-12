/**
 * Magnetiq Bank — Color Tokens
 * Source of truth: Figma DS Kit (P0lMIgYjPwGkYkBziYX3U6)
 * Collections: Primitives → Semantic Tokens (Light / Dark)
 */

// ─── Primitive palette ────────────────────────────────────────────────────────
export const primitives = {
  black: '#000000',
  white: '#FFFFFF',

  violet: {
    main:   '#5100C0',
    deep:   '#280068',
    bright: '#6B52FF',
  },

  green: {
    main:   '#00D180',
    deep:   '#009169',
    bright: '#45ED94',
  },

  grey: {
    dark:       '#586977',
    main:       '#B4C3D3',
    light:      '#D1DDE8',
    ultraLight: '#EDF3F7',
  },
} as const;

// ─── Semantic tokens ──────────────────────────────────────────────────────────
export const semantic = {
  light: {
    surface: {
      primary:   primitives.white,
      secondary: primitives.grey.ultraLight,
    },
    action: {
      primary: primitives.violet.main,
      success: primitives.green.main,
    },
    text: {
      heading: primitives.black,
      body:    primitives.grey.dark,
    },
    border: {
      subtle: primitives.grey.light,
    },
  },

  dark: {
    surface: {
      primary:   primitives.black,
      secondary: primitives.grey.dark,
    },
    action: {
      primary: primitives.violet.main,
      success: primitives.green.main,
    },
    text: {
      heading: primitives.white,
      body:    primitives.grey.light,
    },
    border: {
      subtle: primitives.grey.dark,
    },
  },
} as const;

// ─── Gradient presets ─────────────────────────────────────────────────────────
export const gradients = {
  magnetic:     `linear-gradient(135deg, ${primitives.violet.main} 0%, ${primitives.violet.bright} 50%, transparent 100%)`,
  magneticDark: `linear-gradient(135deg, ${primitives.violet.deep} 0%, ${primitives.violet.main} 60%, transparent 100%)`,
} as const;

export type ColorMode = keyof typeof semantic;
export type SemanticColors = typeof semantic.light;
