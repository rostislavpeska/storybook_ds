import { useState, useRef, useEffect, useId } from 'react';
import PropTypes from 'prop-types';
import './Datepicker.css';

/**
 * Datepicker component for selecting dates following the GOV.cz design system.
 * 
 * Features:
 * - Input field with calendar icon
 * - Popup calendar for date selection
 * - Keyboard navigation support
 * - Controlled and uncontrolled modes
 * - Localization support (Czech by default)
 * 
 * @component
 * @example
 * // Uncontrolled
 * <Datepicker label="Datum narození" name="birthdate" />
 * 
 * // Controlled
 * const [date, setDate] = useState(null);
 * <Datepicker label="Datum" value={date} onChange={setDate} />
 */
export const Datepicker = ({
  label,
  name,
  value: controlledValue,
  defaultValue,
  placeholder = 'dd.mm.rrrr',
  autoOpenOnFocus = false,
  disabled = false,
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  locale = 'cs',
  minDate,
  maxDate,
  onChange,
  onFocus,
  onBlur,
  id: providedId,
  className = '',
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const inputRef = useRef(null);
  const calendarRef = useRef(null);
  
  // Controlled vs uncontrolled
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue || null);
  const value = isControlled ? controlledValue : internalValue;
  
  // UI state
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [viewDate, setViewDate] = useState(value || new Date());
  const [focusedDate, setFocusedDate] = useState(null);

  // Localization
  const locales = {
    cs: {
      months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 
               'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
      weekdays: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'],
      today: 'Dnes',
    },
    en: {
      months: ['January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'],
      weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      today: 'Today',
    },
  };
  const t = locales[locale] || locales.cs;

  // Format date for display
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Parse date from string
  const parseDate = (str) => {
    if (!str) return null;
    const parts = str.split('.');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
    const date = new Date(year, month, day);
    if (date.getDate() !== day || date.getMonth() !== month) return null;
    return date;
  };

  // Update input text when value changes
  useEffect(() => {
    setInputText(formatDate(value));
  }, [value]);

  // Handle value change
  const handleDateChange = (newDate) => {
    if (!isControlled) {
      setInternalValue(newDate);
    }
    onChange?.(newDate);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Auto-format input as user types (dd.mm.rrrr)
  const formatInputAsTyped = (rawValue, previousValue) => {
    // Remove all non-numeric characters
    let digits = rawValue.replace(/\D/g, '');
    
    // Limit to 8 digits (ddmmyyyy)
    digits = digits.slice(0, 8);
    
    // Build formatted string
    let formatted = '';
    
    if (digits.length > 0) {
      // Day (first 2 digits)
      formatted = digits.slice(0, 2);
      
      if (digits.length >= 2) {
        formatted += '.';
      }
      
      if (digits.length > 2) {
        // Month (next 2 digits)
        formatted += digits.slice(2, 4);
        
        if (digits.length >= 4) {
          formatted += '.';
        }
        
        if (digits.length > 4) {
          // Year (remaining digits)
          formatted += digits.slice(4, 8);
        }
      }
    }
    
    return formatted;
  };

  // Handle input text change with auto-formatting
  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const cursorPos = e.target.selectionStart;
    
    // Check if user is deleting (backspace)
    const isDeleting = rawValue.length < inputText.length;
    
    // Format the input
    const formatted = formatInputAsTyped(rawValue, inputText);
    setInputText(formatted);
    
    // Calculate new cursor position
    let newCursorPos = cursorPos;
    if (!isDeleting) {
      // If we just auto-inserted a dot, move cursor past it
      if (formatted.length > rawValue.length) {
        newCursorPos = formatted.length;
      }
    }
    
    // Try to parse complete date
    if (formatted.length === 10) {
      const parsed = parseDate(formatted);
      if (parsed) {
        if (!isControlled) {
          setInternalValue(parsed);
        }
        onChange?.(parsed);
        setViewDate(parsed);
      }
    }
    
    // Set cursor position after React re-render
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
      }
    });
  };

  // Handle input blur - validate and format
  const handleInputBlur = (e) => {
    const parsed = parseDate(inputText);
    if (parsed) {
      setInputText(formatDate(parsed));
      if (!isControlled) {
        setInternalValue(parsed);
      }
      onChange?.(parsed);
    } else if (inputText && inputText.length > 0 && inputText.length < 10) {
      // Incomplete date - clear or show error
      if (!value) {
        setInputText('');
      } else {
        setInputText(formatDate(value));
      }
    } else if (!inputText) {
      // Empty input - clear value
      if (!isControlled && value) {
        setInternalValue(null);
        onChange?.(null);
      }
    }
    onBlur?.(e);
  };

  // Toggle calendar
  const toggleCalendar = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setViewDate(value || new Date());
        setFocusedDate(value || new Date());
      }
    }
  };

  // Handle input focus
  const handleInputFocus = (e) => {
    if (autoOpenOnFocus && !disabled) {
      setIsOpen(true);
      setViewDate(value || new Date());
      setFocusedDate(value || new Date());
    }
    onFocus?.(e);
  };

  // Handle input keydown for better UX
  const handleInputKeyDown = (e) => {
    // When calendar is open, handle navigation
    if (isOpen) {
      const current = focusedDate || value || new Date();
      let newDate = new Date(current);

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          newDate.setDate(newDate.getDate() - 1);
          setFocusedDate(newDate);
          if (newDate.getMonth() !== viewDate.getMonth()) {
            setViewDate(newDate);
          }
          return;
        case 'ArrowRight':
          e.preventDefault();
          newDate.setDate(newDate.getDate() + 1);
          setFocusedDate(newDate);
          if (newDate.getMonth() !== viewDate.getMonth()) {
            setViewDate(newDate);
          }
          return;
        case 'ArrowUp':
          e.preventDefault();
          newDate.setDate(newDate.getDate() - 7);
          setFocusedDate(newDate);
          if (newDate.getMonth() !== viewDate.getMonth()) {
            setViewDate(newDate);
          }
          return;
        case 'ArrowDown':
          e.preventDefault();
          newDate.setDate(newDate.getDate() + 7);
          setFocusedDate(newDate);
          if (newDate.getMonth() !== viewDate.getMonth()) {
            setViewDate(newDate);
          }
          return;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (!isDateDisabled(current)) {
            handleDateChange(current);
          }
          return;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          return;
        default:
          break;
      }
    }
    
    // When calendar is closed
    // Allow: backspace, delete, tab, escape, arrows (for text cursor)
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
    
    if (allowedKeys.includes(e.key)) {
      return;
    }
    
    // Arrow down opens calendar
    if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
      setViewDate(value || new Date());
      setFocusedDate(value || new Date());
      return;
    }
    
    // Allow Ctrl/Cmd + A, C, V, X
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
      return;
    }
    
    // Block non-numeric input
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target) &&
          !e.target.closest('.gov-datepicker__toggle')) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Start from Monday (adjust for week starting on Monday)
    let startDay = firstDay.getDay() - 1;
    if (startDay < 0) startDay = 6;
    
    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows x 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }
    
    return days;
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Check if date is selected
  const isSelected = (date) => {
    if (!value) return false;
    return date.getDate() === value.getDate() &&
           date.getMonth() === value.getMonth() &&
           date.getFullYear() === value.getFullYear();
  };

  // Check if date is disabled
  const isDateDisabled = (date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  // Navigate months
  const navigateMonth = (delta) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1));
  };

  // Navigate years
  const navigateYear = (delta) => {
    setViewDate(new Date(viewDate.getFullYear() + delta, viewDate.getMonth(), 1));
  };

  // Go to today
  const goToToday = () => {
    const today = new Date();
    handleDateChange(today);
  };

  const classNames = [
    'gov-datepicker',
    disabled && 'gov-datepicker--disabled',
    invalid && 'gov-datepicker--invalid',
    isOpen && 'gov-datepicker--open',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={id} className="gov-datepicker__label">
          {label}
          {required && <span className="gov-datepicker__required" aria-hidden="true"> *</span>}
        </label>
      )}
      
      <div className="gov-datepicker__input-wrapper">
        <input
          ref={inputRef}
          type="text"
          id={id}
          name={name}
          value={inputText}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          aria-invalid={invalid || undefined}
          aria-describedby={
            [helperText && `${id}-helper`, invalid && invalidMessage && `${id}-error`]
              .filter(Boolean).join(' ') || undefined
          }
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="gov-datepicker__input"
          autoComplete="off"
          inputMode="numeric"
          {...props}
        />
        <button
          type="button"
          className="gov-datepicker__toggle"
          onClick={toggleCalendar}
          disabled={disabled}
          aria-label="Otevřít kalendář"
          tabIndex={-1}
        >
          <svg className="gov-datepicker__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div 
          ref={calendarRef}
          className="gov-datepicker__calendar"
          role="dialog"
          aria-modal="true"
          aria-label="Kalendář"
        >
          <div className="gov-datepicker__header">
            <button
              type="button"
              className="gov-datepicker__nav gov-datepicker__nav--prev-year"
              onClick={() => navigateYear(-1)}
              aria-label="Předchozí rok"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="11,17 6,12 11,7"/>
                <polyline points="18,17 13,12 18,7"/>
              </svg>
            </button>
            <button
              type="button"
              className="gov-datepicker__nav gov-datepicker__nav--prev-month"
              onClick={() => navigateMonth(-1)}
              aria-label="Předchozí měsíc"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            
            <span className="gov-datepicker__title">
              {t.months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            
            <button
              type="button"
              className="gov-datepicker__nav gov-datepicker__nav--next-month"
              onClick={() => navigateMonth(1)}
              aria-label="Další měsíc"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
            <button
              type="button"
              className="gov-datepicker__nav gov-datepicker__nav--next-year"
              onClick={() => navigateYear(1)}
              aria-label="Další rok"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,17 11,12 6,7"/>
                <polyline points="13,17 18,12 13,7"/>
              </svg>
            </button>
          </div>

          <div className="gov-datepicker__weekdays">
            {t.weekdays.map((day) => (
              <span key={day} className="gov-datepicker__weekday">{day}</span>
            ))}
          </div>

          <div className="gov-datepicker__days" role="grid">
            {generateCalendarDays().map((day, index) => {
              const dayDisabled = isDateDisabled(day.date);
              const daySelected = isSelected(day.date);
              const dayToday = isToday(day.date);
              const isFocused = focusedDate && 
                day.date.getDate() === focusedDate.getDate() &&
                day.date.getMonth() === focusedDate.getMonth() &&
                day.date.getFullYear() === focusedDate.getFullYear();

              return (
                <button
                  key={index}
                  type="button"
                  className={[
                    'gov-datepicker__day',
                    !day.isCurrentMonth && 'gov-datepicker__day--other-month',
                    dayToday && 'gov-datepicker__day--today',
                    daySelected && 'gov-datepicker__day--selected',
                    dayDisabled && 'gov-datepicker__day--disabled',
                    isFocused && 'gov-datepicker__day--focused',
                  ].filter(Boolean).join(' ')}
                  onClick={() => !dayDisabled && handleDateChange(day.date)}
                  disabled={dayDisabled}
                  tabIndex={isFocused ? 0 : -1}
                  aria-selected={daySelected}
                  aria-current={dayToday ? 'date' : undefined}
                >
                  {day.date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="gov-datepicker__footer">
            <button
              type="button"
              className="gov-datepicker__today"
              onClick={goToToday}
            >
              {t.today}
            </button>
          </div>
        </div>
      )}

      {(helperText || (invalid && invalidMessage)) && (
        <div className="gov-datepicker__message">
          {helperText && !invalid && (
            <span id={`${id}-helper`} className="gov-datepicker__helper">
              {helperText}
            </span>
          )}
          {invalid && invalidMessage && (
            <span id={`${id}-error`} className="gov-datepicker__error" role="alert">
              <svg className="gov-datepicker__error-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
              {invalidMessage}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

Datepicker.propTypes = {
  /** Label text */
  label: PropTypes.string,
  /** Form input name */
  name: PropTypes.string,
  /** Controlled value (Date object) */
  value: PropTypes.instanceOf(Date),
  /** Initial value for uncontrolled mode */
  defaultValue: PropTypes.instanceOf(Date),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Invalid/error state */
  invalid: PropTypes.bool,
  /** Error message */
  invalidMessage: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Required field */
  required: PropTypes.bool,
  /** Locale for month/day names */
  locale: PropTypes.oneOf(['cs', 'en']),
  /** Minimum selectable date */
  minDate: PropTypes.instanceOf(Date),
  /** Maximum selectable date */
  maxDate: PropTypes.instanceOf(Date),
  /** Auto-open calendar on input focus */
  autoOpenOnFocus: PropTypes.bool,
  /** Called when date changes */
  onChange: PropTypes.func,
  /** Called on input focus */
  onFocus: PropTypes.func,
  /** Called on input blur */
  onBlur: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Datepicker;

