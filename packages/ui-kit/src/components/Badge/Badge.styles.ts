import styled, { css } from 'styled-components';
import type { BadgeCategory, BadgeVariant, StatusVariant } from './Badge';

interface StyledBadgeProps {
  $category: BadgeCategory;
  $variant:  BadgeVariant;
}

// ─── Color map ────────────────────────────────────────────────────────────────
const variantStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  // Status
  active: css`
    background-color: var(--color-green-bright);
    color:            #000000;
  `,
  pending: css`
    background-color: var(--surface-secondary);
    color:            var(--text-body);
  `,
  verified: css`
    background-color: var(--color-violet-bright);
    color:            #ffffff;
  `,
  error: css`
    background-color: #FFE5E5;
    color:            #CC0000;
  `,

  // Tag
  violet: css`
    background-color: var(--action-primary);
    color:            #ffffff;
  `,
  green: css`
    background-color: var(--action-success);
    color:            #000000;
  `,
  grey: css`
    background-color: var(--color-grey-light);
    color:            var(--text-body);
  `,
  outline: css`
    background-color: transparent;
    color:            var(--action-primary);
    border:           1.5px solid var(--action-primary);
  `,
};

// ─── Dot color map ────────────────────────────────────────────────────────────
const dotColors: Record<StatusVariant, string> = {
  active:   'var(--color-green-deep)',
  pending:  'var(--color-grey-main)',
  verified: 'var(--color-violet-main)',
  error:    '#FF3B30',
};

// ─── StyledBadge ──────────────────────────────────────────────────────────────
export const StyledBadge = styled.span<StyledBadgeProps>`
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-1);
  padding:        6px var(--space-3);
  border-radius:  var(--radius-magnetic);
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  white-space:    nowrap;
  line-height:    1;

  ${({ $variant }) => variantStyles[$variant]}
`;

// ─── Status dot ───────────────────────────────────────────────────────────────
export const Dot = styled.span<{ $variant: StatusVariant }>`
  width:         6px;
  height:        6px;
  border-radius: 50%;
  flex-shrink:   0;
  background-color: ${({ $variant }) => dotColors[$variant]};
`;
