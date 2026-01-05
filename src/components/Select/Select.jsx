import { useId, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

/**
 * Select component for dropdown selection following the GOV.cz design system.
 * 
 * Supports both controlled and uncontrolled modes:
 * - **Controlled**: Pass `value` and `onChange` props
 * - **Uncontrolled**: Pass `defaultValue` for initial value
 * 
 * @component
 * @example
 * // Basic select
 * <Select 
 *   label="Kraj" 
 *   name="region"
 *   options={[
 *     { value: 'praha', label: 'Praha' },
 *     { value: 'brno', label: 'Jihomoravský kraj' },
 *   ]}
 * />
 * 
 * // With placeholder
 * <Select 
 *   label="Select option" 
 *   placeholder="-- Select --"
 *   options={options}
 * />
 */
export const Select = forwardRef(({
  // Core props
  label,
  name,
  placeholder,
  
  // Options
  options = [],
  
  // Value props
  value: controlledValue,
  defaultValue = '',
  
  // State props
  disabled = false,
  
  // Validation props
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  
  // Appearance props
  size = 'm',
  fullWidth = true,
  
  // Event handlers
  onChange,
  onFocus,
  onBlur,
  
  // Other
  id: providedId,
  className = '',
  ...props
}, ref) => {
  // Support both controlled and uncontrolled modes
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = isControlled ? controlledValue : internalValue;

  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  const handleChange = (event) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const classNames = [
    'gov-select',
    `gov-select--${size}`,
    fullWidth && 'gov-select--full-width',
    disabled && 'gov-select--disabled',
    invalid && 'gov-select--invalid',
    !value && placeholder && 'gov-select--placeholder',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={id} className="gov-select__label">
          {label}
          {required && <span className="gov-select__required" aria-hidden="true"> *</span>}
        </label>
      )}
      
      <div className="gov-select__wrapper">
        <select
          ref={ref}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={invalid || undefined}
          aria-describedby={[
            helperText && helperId,
            invalid && invalidMessage && errorId,
          ].filter(Boolean).join(' ') || undefined}
          className="gov-select__field"
          {...props}
        >
          {placeholder && (
            <option value="" disabled={required}>
              {placeholder}
            </option>
          )}
          {options.map((option) => {
            if (option.group) {
              return (
                <optgroup key={option.group} label={option.group}>
                  {option.options.map((opt) => (
                    <option 
                      key={opt.value} 
                      value={opt.value}
                      disabled={opt.disabled}
                    >
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
              );
            }
            return (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            );
          })}
        </select>
        
        <span className="gov-select__icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M4.427 6.427L8 10l3.573-3.573L10.427 5.28 8 7.707 5.573 5.28z"/>
          </svg>
        </span>
      </div>
      
      <div className="gov-select__footer">
        {helperText && !invalid && (
          <span id={helperId} className="gov-select__helper">
            {helperText}
          </span>
        )}
        
        {invalid && invalidMessage && (
          <span id={errorId} className="gov-select__error" role="alert">
            <svg className="gov-select__error-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 4h2v5H7V4zm0 6h2v2H7v-2z"/>
            </svg>
            {invalidMessage}
          </span>
        )}
      </div>
    </div>
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  /** Label text displayed above the select */
  label: PropTypes.string,
  /** Select name attribute */
  name: PropTypes.string,
  /** Placeholder option text */
  placeholder: PropTypes.string,
  /** Array of options */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
      }),
      PropTypes.shape({
        group: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
          })
        ).isRequired,
      }),
    ])
  ),
  /** Controlled value */
  value: PropTypes.string,
  /** Default value for uncontrolled mode */
  defaultValue: PropTypes.string,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Invalid/error state */
  invalid: PropTypes.bool,
  /** Error message displayed when invalid */
  invalidMessage: PropTypes.string,
  /** Helper text displayed below select */
  helperText: PropTypes.string,
  /** Required field indicator */
  required: PropTypes.bool,
  /** Size variant */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Full width of container */
  fullWidth: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Focus handler */
  onFocus: PropTypes.func,
  /** Blur handler */
  onBlur: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Select;


