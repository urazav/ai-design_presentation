import React from 'react';
import {
  DefaultCardRoot,
  DivideCardRoot,
  DivideLeft,
  DivideRight,
} from './Card.styles';

export type CardVariant = 'default' | 'magnetiq-divide';

// ─── Default card ─────────────────────────────────────────────────────────────
export interface DefaultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant:   'default';
  children:  React.ReactNode;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}

// ─── Magnetiq-Divide card ─────────────────────────────────────────────────────
export interface MagnetiqDivideCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant:       'magnetiq-divide';
  /** Content for the dark gradient left panel */
  leftContent:   React.ReactNode;
  /** Content for the light right panel */
  rightContent:  React.ReactNode;
  elevation?:    'none' | 'sm' | 'md' | 'lg';
}

export type CardProps = DefaultCardProps | MagnetiqDivideCardProps;

export const Card: React.FC<CardProps> = (props) => {
  if (props.variant === 'magnetiq-divide') {
    const { variant: _v, leftContent, rightContent, elevation = 'md', ...rest } = props;
    return (
      <DivideCardRoot $elevation={elevation} {...rest}>
        <DivideLeft>{leftContent}</DivideLeft>
        <DivideRight>{rightContent}</DivideRight>
      </DivideCardRoot>
    );
  }

  const { variant: _v, elevation = 'sm', children, ...rest } = props;
  return (
    <DefaultCardRoot $elevation={elevation} {...rest}>
      {children}
    </DefaultCardRoot>
  );
};

Card.displayName = 'Card';
