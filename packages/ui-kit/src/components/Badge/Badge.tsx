import React from 'react';
import { StyledBadge, Dot } from './Badge.styles';

export type BadgeCategory = 'status' | 'tag';
export type StatusVariant = 'active' | 'pending' | 'verified' | 'error';
export type TagVariant    = 'violet' | 'green' | 'grey' | 'outline';
export type BadgeVariant  = StatusVariant | TagVariant;

export interface BadgeProps {
  category?: BadgeCategory;
  variant?:  BadgeVariant;
  children:  React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  category = 'tag',
  variant  = 'violet',
  children,
  ...rest
}) => {
  const isStatus = category === 'status';

  return (
    <StyledBadge $category={category} $variant={variant} role="status" {...rest}>
      {isStatus && <Dot $variant={variant as StatusVariant} aria-hidden="true" />}
      {children}
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';
