/**
 * Magnetiq Bank — Typography Tokens
 * Heading: Plus Jakarta Sans (Gilroy substitute — same humanist geometry)
 * Body:    Manrope
 *
 * Tracking spec:
 *   -1% on H1 (light BG)
 *   +1% on H3/H4 and all Manrope
 */

export const fontFamily = {
  heading: '"Plus Jakarta Sans", system-ui, sans-serif',
  body:    '"Manrope", system-ui, sans-serif',
} as const;

export const fontSize = {
  h1:     '3rem',       // 48px
  h2:     '2rem',       // 32px
  h3:     '1.5rem',     // 24px
  h4:     '1.125rem',   // 18px
  bodyL:  '1rem',       // 16px
  bodyM:  '0.875rem',   // 14px
  labelS: '0.75rem',    // 12px
} as const;

export const fontWeight = {
  regular:   400,
  medium:    500,
  semiBold:  600,
  bold:      700,
  extraBold: 800,
} as const;

export const lineHeight = {
  tight:  '110%',
  snug:   '120%',
  normal: '140%',
  relaxed:'160%',
} as const;

export const letterSpacing = {
  tight:  '-0.01em',  // H1
  normal: '0em',      // H2
  wide:   '0.01em',   // H3, H4, body, labels
} as const;

// ─── Composed text style definitions ─────────────────────────────────────────
export const textStyles = {
  h1: {
    fontFamily:    fontFamily.heading,
    fontSize:      fontSize.h1,
    fontWeight:    fontWeight.semiBold,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily:    fontFamily.heading,
    fontSize:      fontSize.h2,
    fontWeight:    fontWeight.semiBold,
    lineHeight:    lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  h3: {
    fontFamily:    fontFamily.heading,
    fontSize:      fontSize.h3,
    fontWeight:    fontWeight.semiBold,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  h4: {
    fontFamily:    fontFamily.heading,
    fontSize:      fontSize.h4,
    fontWeight:    fontWeight.bold,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  bodyL: {
    fontFamily:    fontFamily.body,
    fontSize:      fontSize.bodyL,
    fontWeight:    fontWeight.regular,
    lineHeight:    lineHeight.relaxed,
    letterSpacing: letterSpacing.wide,
  },
  bodyM: {
    fontFamily:    fontFamily.body,
    fontSize:      fontSize.bodyM,
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  labelS: {
    fontFamily:    fontFamily.body,
    fontSize:      fontSize.labelS,
    fontWeight:    fontWeight.bold,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
} as const;

export type TextStyleKey = keyof typeof textStyles;
