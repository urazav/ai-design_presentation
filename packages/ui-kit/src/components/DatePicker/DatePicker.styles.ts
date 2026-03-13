import styled, { css } from 'styled-components';
import type { DatePickerState } from './DatePicker';

// ─── Border color by state — mirrors Input ────────────────────────────────────
const borderByState: Record<DatePickerState, string> = {
  default:  'var(--border-subtle)',
  focus:    'var(--action-primary)',
  filled:   'var(--color-grey-main)',
  error:    '#FF3B30',
  disabled: 'var(--color-grey-ultra-light)',
};

const borderWidthByState: Record<DatePickerState, string> = {
  default:  '1px',
  focus:    '2px',
  filled:   '1px',
  error:    '2px',
  disabled: '1px',
};

// ─── Wrapper ─────────────────────────────────────────────────────────────────
export const DatePickerWrapper = styled.div<{ $fullWidth: boolean }>`
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
  position:       relative;
  width:          ${({ $fullWidth }) => ($fullWidth ? '100%' : '280px')};
  font-family:    var(--font-body);
`;

// ─── Label — identical to Input's Label ───────────────────────────────────────
export const Label = styled.label<{ $state: DatePickerState }>`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color: ${({ $state }) =>
    $state === 'error'    ? '#FF3B30' :
    'var(--text-body)'};
  cursor: default;
`;

// ─── Trigger button (styled as an Input field) ───────────────────────────────
export const TriggerField = styled.button<{ $state: DatePickerState }>`
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-2);
  padding:          0 var(--space-4);
  height:           56px;
  width:            100%;
  background-color: var(--surface-secondary);
  border-radius:    var(--radius-stability);
  border:           ${({ $state }) =>
    `${borderWidthByState[$state]} solid ${borderByState[$state]}`};
  cursor:           ${({ $state }) => $state === 'disabled' ? 'not-allowed' : 'pointer'};
  opacity:          ${({ $state }) => $state === 'disabled' ? 0.5 : 1};
  transition:       border-color 150ms ease;
  text-align:       left;

  &:focus-visible {
    outline:       none;
    border-width:  2px;
    border-color:  ${({ $state }) =>
      $state === 'error' ? '#FF3B30' : 'var(--action-primary)'};
  }
`;

// ─── Trigger value / placeholder text ────────────────────────────────────────
export const TriggerValue = styled.span<{ $hasValue: boolean }>`
  font-family:    var(--font-body);
  font-size:      var(--text-body-m);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color:          ${({ $hasValue }) => $hasValue ? 'var(--text-body)' : 'var(--text-body)'};
  opacity:        ${({ $hasValue }) => $hasValue ? 1 : 0.5};
  flex:           1;
  min-width:      0;
`;

// ─── Calendar icon ────────────────────────────────────────────────────────────
export const CalendarIcon = styled.svg`
  width:      16px;
  height:     16px;
  flex-shrink: 0;
  color:      var(--text-body);
  opacity:    0.6;
`;

// ─── Calendar dropdown panel ──────────────────────────────────────────────────
export const Calendar = styled.div`
  position:         absolute;
  top:              calc(100% + var(--space-1));
  left:             0;
  z-index:          100;
  background:       var(--surface-primary);
  border:           1px solid var(--border-subtle);
  border-radius:    var(--radius-standard);
  padding:          var(--space-4);
  box-shadow:       var(--shadow-md);
  min-width:        280px;
`;

// ─── Navigation row ────────────────────────────────────────────────────────────
export const NavRow = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   var(--space-3);
`;

export const NavTitle = styled.span`
  font-family:    var(--font-body);
  font-size:      var(--text-body-m);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color:          var(--text-heading);
`;

export const NavBtn = styled.button`
  display:          flex;
  align-items:      center;
  justify-content:  center;
  width:            28px;
  height:           28px;
  border:           none;
  background:       transparent;
  border-radius:    var(--radius-standard);
  color:            var(--text-body);
  cursor:           pointer;
  transition:       background-color 120ms ease;

  &:hover {
    background-color: var(--surface-secondary);
    color:            var(--text-heading);
  }

  &:focus-visible {
    outline:        2px solid var(--action-primary);
    outline-offset: 1px;
  }
`;

// ─── Weekday header row ────────────────────────────────────────────────────────
export const WeekdaysRow = styled.div`
  display:       grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: var(--space-1);
`;

export const WeekdayCell = styled.span`
  display:         flex;
  align-items:     center;
  justify-content: center;
  height:          32px;
  font-family:     var(--font-body);
  font-size:       var(--text-label-s);
  font-weight:     500;
  letter-spacing:  var(--tracking-wide);
  color:           var(--text-body);
  opacity:         0.5;
  text-transform:  uppercase;
`;

// ─── Day grid ─────────────────────────────────────────────────────────────────
export const DayGrid = styled.div`
  display:               grid;
  grid-template-columns: repeat(7, 1fr);
  gap:                   2px;
`;

interface DayBtnProps {
  $selected: boolean;
  $today:    boolean;
  $outside:  boolean;
  $disabled: boolean;
}

export const DayBtn = styled.button<DayBtnProps>`
  display:          flex;
  align-items:      center;
  justify-content:  center;
  height:           36px;
  width:            100%;
  border:           none;
  border-radius:    var(--radius-standard);
  font-family:      var(--font-body);
  font-size:        var(--text-body-m);
  font-weight:      400;
  letter-spacing:   var(--tracking-wide);
  cursor:           pointer;
  position:         relative;
  transition:       background-color 120ms ease, color 120ms ease;

  /* Default */
  background-color: transparent;
  color:            var(--text-heading);

  /* Outside-month days */
  ${({ $outside }) => $outside && css`
    color:           var(--color-grey-main);
    pointer-events:  none;
  `}

  /* Disabled days */
  ${({ $disabled, $outside }) => $disabled && !$outside && css`
    color:          var(--color-grey-main);
    cursor:         not-allowed;
    pointer-events: none;
  `}

  /* Today indicator — dot below the number */
  ${({ $today }) => $today && css`
    font-weight: 700;
    color:       var(--action-primary);

    &::after {
      content:          '';
      position:         absolute;
      bottom:           3px;
      left:             50%;
      transform:        translateX(-50%);
      width:            4px;
      height:           4px;
      border-radius:    50%;
      background-color: var(--action-primary);
    }
  `}

  /* Selected day */
  ${({ $selected }) => $selected && css`
    background-color: var(--action-primary);
    color:            var(--color-white);
    font-weight:      700;
    border-radius:    var(--radius-magnetic);

    &:hover {
      background-color: var(--color-violet-deep);
    }
  `}

  /* Hover (non-selected, non-disabled) */
  ${({ $selected, $disabled, $outside }) => !$selected && !$disabled && !$outside && css`
    &:hover {
      background-color: var(--surface-secondary);
    }
  `}

  &:focus-visible {
    outline:        2px solid var(--action-primary);
    outline-offset: -2px;
  }
`;

// ─── Helper / error text — mirrors Input ──────────────────────────────────────
export const HelperText = styled.span<{ $state: DatePickerState }>`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color: ${({ $state }) =>
    $state === 'error' ? '#FF3B30' : 'var(--color-grey-main)'};
`;
