import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize    = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  loading?:  boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant    = 'primary',
  size       = 'md',
  loading    = false,
  iconLeft,
  iconRight,
  fullWidth  = false,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <span aria-hidden="true" className="spinner" />
      ) : (
        <>
          {iconLeft  && <span className="icon icon--left">{iconLeft}</span>}
          {children}
          {iconRight && <span className="icon icon--right">{iconRight}</span>}
        </>
      )}
    </StyledButton>
  );
};

Button.displayName = 'Button';
