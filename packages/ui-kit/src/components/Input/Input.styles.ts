import styled, { css } from 'styled-components';
import type { InputState } from './Input';

// ─── Border color by state ────────────────────────────────────────────────────
const borderByState: Record<InputState, string> = {
  default:  'var(--border-subtle)',
  focus:    'var(--action-primary)',
  filled:   'var(--color-grey-main)',
  error:    '#FF3B30',
  success:  'var(--action-success)',
  disabled: 'var(--color-grey-ultra-light)',
};

const borderWidthByState: Record<InputState, string> = {
  default:  '1px',
  focus:    '2px',
  filled:   '1px',
  error:    '2px',
  success:  '2px',
  disabled: '1px',
};

// ─── InputWrapper ─────────────────────────────────────────────────────────────
export const InputWrapper = styled.div<{ $fullWidth: boolean }>`
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
  width:          ${({ $fullWidth }) => ($fullWidth ? '100%' : '280px')};
`;

// ─── Label ────────────────────────────────────────────────────────────────────
export const Label = styled.label<{ $state: InputState }>`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color: ${({ $state }) =>
    $state === 'error'   ? '#FF3B30' :
    $state === 'success' ? 'var(--action-success)' :
    'var(--text-body)'};
`;

// ─── InputField (wrapper div for icon positioning) ────────────────────────────
export const InputField = styled.div<{ $state: InputState; $hasIcon: boolean }>`
  position:         relative;
  display:          flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          0 var(--space-4);
  height:           56px;
  background-color: var(--surface-secondary);
  border-radius:    var(--radius-stability);
  border:           ${({ $state }) => `${borderWidthByState[$state]} solid ${borderByState[$state]}`};
  transition:       border-color 150ms ease;
  opacity:          ${({ $state }) => $state === 'disabled' ? 0.5 : 1};

  ${({ $hasIcon }) => $hasIcon && css`
    padding-left: var(--space-4);
  `}

  input {
    flex:            1;
    border:          none;
    background:      transparent;
    font-family:     var(--font-body);
    font-size:       var(--text-body-m);
    font-weight:     400;
    letter-spacing:  var(--tracking-wide);
    color:           var(--text-body);
    outline:         none;
    min-width:       0;

    &::placeholder {
      color:   var(--text-body);
      opacity: 0.5;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  &:focus-within {
    border-width: 2px;
    border-color: ${({ $state }) =>
      $state === 'error'   ? '#FF3B30' :
      $state === 'success' ? 'var(--action-success)' :
      'var(--action-primary)'};
  }
`;

// ─── Search icon ──────────────────────────────────────────────────────────────
export const SearchIcon = styled.span`
  display:      inline-flex;
  align-items:  center;
  flex-shrink:  0;
  width:        16px;
  height:       16px;
  color:        var(--text-body);
  opacity:      0.6;

  &::before {
    content:       '';
    display:       block;
    width:         11px;
    height:        11px;
    border:        1.5px solid currentColor;
    border-radius: 50%;
    box-shadow:    3px 3px 0 -1px currentColor;
    transform:     rotate(45deg);
  }
`;

// ─── Indicator icon (✓ / !) ───────────────────────────────────────────────────
export const IndicatorIcon = styled.span<{ $type: 'success' | 'error' }>`
  flex-shrink:  0;
  font-family:  var(--font-body);
  font-weight:  700;
  font-size:    var(--text-body-m);
  color: ${({ $type }) =>
    $type === 'success' ? 'var(--action-success)' : '#FF3B30'};
`;

// ─── Helper / error text ──────────────────────────────────────────────────────
export const HelperText = styled.span<{ $state: InputState }>`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color: ${({ $state }) =>
    $state === 'error'   ? '#FF3B30' :
    $state === 'success' ? 'var(--action-success)' :
    'var(--color-grey-main)'};
`;
