import styled, { css } from 'styled-components';
import type { ButtonVariant, ButtonSize } from './Button';

interface StyledButtonProps {
  $variant:   ButtonVariant;
  $size:      ButtonSize;
  $fullWidth: boolean;
}

// ─── Size map ─────────────────────────────────────────────────────────────────
const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-label-s);
    min-height: 32px;
  `,
  md: css`
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-body-m);
    min-height: 48px;
  `,
  lg: css`
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-body-l);
    min-height: 56px;
  `,
};

// ─── Variant map ──────────────────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: var(--action-primary);
    color: #ffffff;
    border: none;
    box-shadow: var(--shadow-violet);

    &:hover:not(:disabled) {
      background-color: var(--color-violet-deep);
      box-shadow: 0 8px 28px rgba(81, 0, 192, 0.35);
    }

    &:active:not(:disabled) {
      background-color: var(--color-violet-bright);
    }
  `,

  secondary: css`
    background-color: var(--action-success);
    color: #000000;
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-green-deep);
      color: #ffffff;
    }

    &:active:not(:disabled) {
      background-color: var(--color-green-bright);
      color: #000000;
    }
  `,

  ghost: css`
    background-color: transparent;
    color: var(--action-primary);
    border: 1.5px solid var(--action-primary);

    &:hover:not(:disabled) {
      background-color: var(--action-primary);
      color: #ffffff;
    }

    &:active:not(:disabled) {
      background-color: var(--color-violet-deep);
      color: #ffffff;
      border-color: var(--color-violet-deep);
    }
  `,
};

// ─── Styled component ─────────────────────────────────────────────────────────
export const StyledButton = styled.button<StyledButtonProps>`
  /* Base */
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  gap:             var(--space-2);
  font-family:     var(--font-body);
  font-weight:     700;
  letter-spacing:  var(--tracking-wide);
  border-radius:   var(--radius-magnetic);
  cursor:          pointer;
  white-space:     nowrap;
  transition:      background-color 150ms ease, color 150ms ease,
                   box-shadow 150ms ease, border-color 150ms ease;
  outline-offset:  3px;
  text-decoration: none;

  /* Width */
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}

  /* Size */
  ${({ $size }) => sizeStyles[$size]}

  /* Variant */
  ${({ $variant }) => variantStyles[$variant]}

  /* Disabled */
  &:disabled {
    opacity:        0.4;
    cursor:         not-allowed;
    pointer-events: none;
  }

  /* Focus */
  &:focus-visible {
    outline: 2px solid var(--action-primary);
  }

  /* Loading spinner */
  .spinner {
    width:  16px;
    height: 16px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  .icon {
    display:      inline-flex;
    align-items:  center;
    flex-shrink:  0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
