import React, { useId, useState, useRef, useEffect } from 'react';
import {
  DatePickerWrapper,
  Label,
  TriggerField,
  TriggerValue,
  CalendarIcon,
  Calendar,
  NavRow,
  NavBtn,
  NavTitle,
  WeekdaysRow,
  WeekdayCell,
  DayGrid,
  DayBtn,
  HelperText,
} from './DatePicker.styles';

export type DatePickerState = 'default' | 'focus' | 'filled' | 'error' | 'disabled';

export interface DatePickerProps {
  /** Currently selected date */
  value?: Date;
  /** Called when the user selects a date */
  onChange?: (date: Date) => void;
  /** Field label */
  label?: string;
  /** Helper text shown below the field */
  helperText?: string;
  /** Error message — also triggers error state */
  errorMessage?: string;
  /** Explicit visual state (auto-derived when not provided) */
  state?: DatePickerState;
  /** Placeholder shown when no date is selected */
  placeholder?: string;
  /** Earliest selectable date */
  minDate?: Date;
  /** Latest selectable date */
  maxDate?: Date;
  /** Makes the trigger fill its container */
  fullWidth?: boolean;
  disabled?: boolean;
  id?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function toMidnight(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function getCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay(); // 0 = Sunday
  const days: Date[] = [];

  for (let i = startOffset - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  // Complete to 42 cells (6 rows × 7 cols)
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push(new Date(year, month + 1, d));
  }

  return days;
}

function formatDate(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${mm}/${dd}/${date.getFullYear()}`;
}

/** Atom-level date picker for the Magnetiq Bank DS Kit. Mirrors Input API and token usage. */
export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  helperText,
  errorMessage,
  state,
  placeholder = 'MM / DD / YYYY',
  minDate,
  maxDate,
  fullWidth = false,
  disabled,
  id,
}) => {
  const generatedId = useId();
  const triggerId = id ?? generatedId;

  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(value?.getMonth() ?? today.getMonth());
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Derive display state — same logic as Input
  const isDisabled = disabled || state === 'disabled';
  const hasError   = state === 'error' || Boolean(errorMessage);
  const isFilled   = !isDisabled && !hasError && Boolean(value);

  const displayState: DatePickerState = isDisabled
    ? 'disabled'
    : hasError
      ? 'error'
      : open
        ? 'focus'
        : isFilled
          ? 'filled'
          : state ?? 'default';

  const helper = errorMessage ?? helperText;

  // Close calendar on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function selectDay(day: Date) {
    if (isDisabled) return;
    if (minDate && toMidnight(day) < toMidnight(minDate)) return;
    if (maxDate && toMidnight(day) > toMidnight(maxDate)) return;
    onChange?.(day);
    setOpen(false);
  }

  const calendarDays = getCalendarDays(viewYear, viewMonth);

  return (
    <DatePickerWrapper $fullWidth={fullWidth} ref={wrapperRef}>
      {label && (
        <Label htmlFor={triggerId} $state={displayState}>
          {label}
        </Label>
      )}

      <TriggerField
        id={triggerId}
        type="button"
        $state={displayState}
        onClick={() => !isDisabled && setOpen(o => !o)}
        disabled={isDisabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={value ? `Selected date: ${formatDate(value)}` : placeholder}
      >
        <TriggerValue $hasValue={Boolean(value)}>
          {value ? formatDate(value) : placeholder}
        </TriggerValue>
        <CalendarIcon aria-hidden="true" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </CalendarIcon>
      </TriggerField>

      {open && (
        <Calendar role="dialog" aria-label="Calendar">
          <NavRow>
            <NavBtn type="button" onClick={prevMonth} aria-label="Previous month">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavBtn>
            <NavTitle>{MONTHS[viewMonth]} {viewYear}</NavTitle>
            <NavBtn type="button" onClick={nextMonth} aria-label="Next month">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavBtn>
          </NavRow>

          <WeekdaysRow>
            {WEEKDAYS.map(d => <WeekdayCell key={d}>{d}</WeekdayCell>)}
          </WeekdaysRow>

          <DayGrid>
            {calendarDays.map((day, i) => {
              const isCurrentMonth = day.getMonth() === viewMonth;
              const isSelected     = value ? isSameDay(day, value) : false;
              const isToday        = isSameDay(day, today);
              const isOutside      = !isCurrentMonth;
              const isDayDisabled  =
                isOutside ||
                (minDate ? toMidnight(day) < toMidnight(minDate) : false) ||
                (maxDate ? toMidnight(day) > toMidnight(maxDate) : false);

              return (
                <DayBtn
                  key={i}
                  type="button"
                  $selected={isSelected}
                  $today={isToday && !isSelected}
                  $outside={isOutside}
                  $disabled={isDayDisabled}
                  onClick={() => selectDay(day)}
                  disabled={isDayDisabled}
                  aria-pressed={isSelected}
                  aria-label={day.toLocaleDateString('en-US', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                  })}
                  tabIndex={isOutside ? -1 : 0}
                >
                  {day.getDate()}
                </DayBtn>
              );
            })}
          </DayGrid>
        </Calendar>
      )}

      {helper && (
        <HelperText $state={displayState}>{helper}</HelperText>
      )}
    </DatePickerWrapper>
  );
};

DatePicker.displayName = 'DatePicker';
