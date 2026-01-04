import { useId } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * GOV.cz Checkbox Component
 * 
 * A form checkbox following the GOV.cz design system.
 * Supports checked, unchecked, and indeterminate states with error validation.
 * 
 * @example
 * // Basic checkbox
 * <Checkbox label="Accept terms" />
 * 
 * // Checkbox with helper text
 * <Checkbox label="Subscribe" helperText="We'll send you updates" />
 * 
 * // Error state
 * <Checkbox label="Required field" error errorMessage="This field is required" />
 */
export const Checkbox = ({
  label,
  helperText,
  checked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  errorMessage,
  size = 'm',
  onChange,
  name,
  value,
  id: providedId,
  className = '',
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  const classNames = [
    'gov-checkbox',
    `gov-checkbox--${size}`,
    disabled && 'gov-checkbox--disabled',
    error && 'gov-checkbox--error',
    checked && 'gov-checkbox--checked',
    indeterminate && 'gov-checkbox--indeterminate',
    className,
  ].filter(Boolean).join(' ');

  const describedBy = [
    helperText && helperId,
    error && errorMessage && errorId,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div className={classNames}>
      <div className="gov-checkbox__control">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          className="gov-checkbox__input"
          {...props}
        />
        <span className="gov-checkbox__box" aria-hidden="true">
          {checked && !indeterminate && (
            <svg className="gov-checkbox__icon gov-checkbox__icon--check" viewBox="0 0 16 16" fill="none">
              <path 
                d="M13.5 4.5L6 12L2.5 8.5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg className="gov-checkbox__icon gov-checkbox__icon--indeterminate" viewBox="0 0 16 16" fill="none">
              <path 
                d="M3 8H13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        {label && (
          <label htmlFor={id} className="gov-checkbox__label">
            {label}
          </label>
        )}
      </div>
      
      {(helperText || (error && errorMessage)) && (
        <div className="gov-checkbox__messages">
          {helperText && !error && (
            <span id={helperId} className="gov-checkbox__helper">
              {helperText}
            </span>
          )}
          {error && errorMessage && (
            <span id={errorId} className="gov-checkbox__error" role="alert">
              <svg className="gov-checkbox__error-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7.25 4.5h1.5v4.25h-1.5V4.5zm.75 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
              </svg>
              {errorMessage}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  /** Label text displayed next to the checkbox */
  label: PropTypes.string,
  /** Helper text displayed below the checkbox */
  helperText: PropTypes.string,
  /** Controlled checked state */
  checked: PropTypes.bool,
  /** Indeterminate state (partially checked) */
  indeterminate: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Error state */
  error: PropTypes.bool,
  /** Error message displayed when in error state */
  errorMessage: PropTypes.string,
  /** Size variant */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Change handler */
  onChange: PropTypes.func,
  /** Input name attribute */
  name: PropTypes.string,
  /** Input value attribute */
  value: PropTypes.string,
  /** Custom ID (auto-generated if not provided) */
  id: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Checkbox;

