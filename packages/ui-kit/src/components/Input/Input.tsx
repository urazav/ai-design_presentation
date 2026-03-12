import React, { useId } from 'react';
import {
  InputWrapper,
  Label,
  InputField,
  HelperText,
  SearchIcon,
  IndicatorIcon,
} from './Input.styles';

export type InputType  = 'text' | 'password' | 'search' | 'email' | 'tel' | 'number';
export type InputState = 'default' | 'focus' | 'filled' | 'error' | 'success' | 'disabled';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?:          InputType;
  label?:         string;
  helperText?:    string;
  errorMessage?:  string;
  successMessage?: string;
  state?:         InputState;
  fullWidth?:     boolean;
}

export const Input: React.FC<InputProps> = ({
  type           = 'text',
  label,
  helperText,
  errorMessage,
  successMessage,
  state          = 'default',
  fullWidth      = false,
  disabled,
  id,
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  // Derive display state
  const isDisabled = disabled || state === 'disabled';
  const hasError   = state === 'error' || Boolean(errorMessage);
  const hasSuccess = state === 'success' || Boolean(successMessage);

  const displayState: InputState = isDisabled
    ? 'disabled'
    : hasError
      ? 'error'
      : hasSuccess
        ? 'success'
        : state;

  const helper = errorMessage ?? successMessage ?? helperText;

  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={inputId} $state={displayState}>
          {label}
        </Label>
      )}

      <InputField
        id={inputId}
        type={type === 'search' ? 'text' : type}
        $state={displayState}
        $hasIcon={type === 'search'}
        disabled={isDisabled}
        aria-invalid={hasError}
        aria-describedby={helper ? `${inputId}-helper` : undefined}
        {...rest}
      >
        {type === 'search' && <SearchIcon aria-hidden="true" />}
        <input
          type={type === 'search' ? 'search' : type}
          id={inputId}
          disabled={isDisabled}
          aria-invalid={hasError}
          {...rest}
        />
        {hasSuccess && <IndicatorIcon $type="success" aria-hidden="true">✓</IndicatorIcon>}
        {hasError   && <IndicatorIcon $type="error"   aria-hidden="true">!</IndicatorIcon>}
      </InputField>

      {helper && (
        <HelperText id={`${inputId}-helper`} $state={displayState}>
          {helper}
        </HelperText>
      )}
    </InputWrapper>
  );
};

Input.displayName = 'Input';
