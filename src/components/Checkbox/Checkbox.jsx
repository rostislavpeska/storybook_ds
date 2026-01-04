import { useId, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * Checkbox component for form inputs following the GOV.cz design system.
 * 
 * Supports both controlled and uncontrolled modes:
 * - **Controlled**: Pass `checked` and `onChange` props
 * - **Uncontrolled**: Pass `defaultChecked` for initial value
 * 
 * @component
 * @example
 * // Uncontrolled (simplest usage)
 * <Checkbox name="terms" label="I agree to terms" />
 * 
 * // Controlled
 * const [checked, setChecked] = useState(false);
 * <Checkbox 
 *   checked={checked} 
 *   onChange={(e) => setChecked(e.target.checked)} 
 *   label="Subscribe" 
 * />
 */
export const Checkbox = ({
  // Core props
  label,
  name,
  value,
  
  // State props
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  
  // Validation props
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  
  // Appearance props  
  size = 'm',
  
  // Event handlers
  onChange,
  onFocus,
  onBlur,
  
  // Other
  id: providedId,
  className = '',
  ...props
}) => {
  // Support both controlled and uncontrolled modes
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const checked = isControlled ? controlledChecked : internalChecked;

  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  // Handle indeterminate state via ref
  const [inputRef, setInputRef] = useState(null);
  useEffect(() => {
    if (inputRef) {
      inputRef.indeterminate = indeterminate;
    }
  }, [inputRef, indeterminate]);

  const handleChange = (event) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const classNames = [
    'gov-checkbox',
    `gov-checkbox--${size}`,
    disabled && 'gov-checkbox--disabled',
    invalid && 'gov-checkbox--invalid',
    checked && 'gov-checkbox--checked',
    indeterminate && 'gov-checkbox--indeterminate',
    className,
  ].filter(Boolean).join(' ');

  const describedBy = [
    helperText && !invalid && helperId,
    invalid && invalidMessage && errorId,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div className={classNames}>
      <label className="gov-checkbox__control">
        <input
          ref={setInputRef}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className="gov-checkbox__input"
          {...props}
        />
        <span className="gov-checkbox__box" aria-hidden="true">
          {checked && !indeterminate && (
            <svg className="gov-checkbox__icon" viewBox="0 0 16 16" fill="none">
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
            <svg className="gov-checkbox__icon" viewBox="0 0 16 16" fill="none">
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
          <span className="gov-checkbox__label">
            {label}
            {required && <span className="gov-checkbox__required" aria-hidden="true"> *</span>}
          </span>
        )}
      </label>
      
      {(helperText || (invalid && invalidMessage)) && (
        <div className="gov-checkbox__message">
          {helperText && !invalid && (
            <span id={helperId} className="gov-checkbox__helper">
              {helperText}
            </span>
          )}
          {invalid && invalidMessage && (
            <span id={errorId} className="gov-checkbox__error" role="alert">
              <svg className="gov-checkbox__error-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
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

Checkbox.propTypes = {
  /** Text label displayed next to the checkbox */
  label: PropTypes.string,
  /** Form input name */
  name: PropTypes.string,
  /** Form input value */
  value: PropTypes.string,
  /** Controlled checked state. Use with `onChange`. */
  checked: PropTypes.bool,
  /** Initial checked state for uncontrolled usage */
  defaultChecked: PropTypes.bool,
  /** Shows indeterminate (minus) state instead of check */
  indeterminate: PropTypes.bool,
  /** Disables the checkbox */
  disabled: PropTypes.bool,
  /** Shows invalid/error styling */
  invalid: PropTypes.bool,
  /** Error message shown when `invalid` is true */
  invalidMessage: PropTypes.string,
  /** Helper text shown below the checkbox */
  helperText: PropTypes.string,
  /** Marks field as required */
  required: PropTypes.bool,
  /** Size variant */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Called when checked state changes */
  onChange: PropTypes.func,
  /** Called when checkbox receives focus */
  onFocus: PropTypes.func,
  /** Called when checkbox loses focus */
  onBlur: PropTypes.func,
  /** Custom ID (auto-generated if not provided) */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Checkbox;
