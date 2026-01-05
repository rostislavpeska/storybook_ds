import { useId, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * Input component for form text inputs following the GOV.cz design system.
 * 
 * Supports both controlled and uncontrolled modes:
 * - **Controlled**: Pass `value` and `onChange` props
 * - **Uncontrolled**: Pass `defaultValue` for initial value
 * 
 * For multi-line inputs, use `multiline={true}` or set `rows` prop.
 * 
 * @component
 * @example
 * // Basic text input
 * <Input label="Jméno" name="firstName" placeholder="Zadejte jméno" />
 * 
 * // With helper text
 * <Input label="E-mail" type="email" helperText="Zadejte platný e-mail" />
 * 
 * // With error
 * <Input label="PSČ" invalid invalidMessage="Neplatné PSČ" />
 * 
 * // Textarea (multiline)
 * <Input label="Popis" multiline rows={4} />
 */
export const Input = forwardRef(({
  // Core props
  label,
  name,
  type = 'text',
  placeholder,
  
  // Value props
  value: controlledValue,
  defaultValue = '',
  
  // State props
  disabled = false,
  readOnly = false,
  
  // Validation props
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  
  // Multiline (Textarea) props
  multiline = false,
  rows = 3,
  resize = 'vertical',
  
  // Appearance props
  size = 'm',
  fullWidth = true,
  
  // Character limit
  maxLength,
  showCharCount = false,
  
  // Icons
  iconLeft,
  iconRight,
  
  // Event handlers
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  
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

  const charCount = value?.length || 0;

  const classNames = [
    'gov-input',
    `gov-input--${size}`,
    multiline && 'gov-input--multiline',
    fullWidth && 'gov-input--full-width',
    disabled && 'gov-input--disabled',
    invalid && 'gov-input--invalid',
    iconLeft && 'gov-input--has-icon-left',
    iconRight && 'gov-input--has-icon-right',
    className,
  ].filter(Boolean).join(' ');

  const inputProps = {
    ref,
    id,
    name,
    value,
    placeholder,
    disabled,
    readOnly,
    required,
    maxLength,
    onChange: handleChange,
    onFocus,
    onBlur,
    onKeyDown,
    'aria-invalid': invalid || undefined,
    'aria-describedby': [
      helperText && helperId,
      invalid && invalidMessage && errorId,
    ].filter(Boolean).join(' ') || undefined,
    className: 'gov-input__field',
    ...props,
  };

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={id} className="gov-input__label">
          {label}
          {required && <span className="gov-input__required" aria-hidden="true"> *</span>}
        </label>
      )}
      
      <div className="gov-input__wrapper">
        {iconLeft && (
          <span className="gov-input__icon gov-input__icon--left" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        
        {multiline ? (
          <textarea
            {...inputProps}
            rows={rows}
            style={{ resize }}
          />
        ) : (
          <input
            {...inputProps}
            type={type}
          />
        )}
        
        {iconRight && (
          <span className="gov-input__icon gov-input__icon--right" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>
      
      <div className="gov-input__footer">
        {helperText && !invalid && (
          <span id={helperId} className="gov-input__helper">
            {helperText}
          </span>
        )}
        
        {invalid && invalidMessage && (
          <span id={errorId} className="gov-input__error" role="alert">
            <svg className="gov-input__error-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 4h2v5H7V4zm0 6h2v2H7v-2z"/>
            </svg>
            {invalidMessage}
          </span>
        )}
        
        {showCharCount && maxLength && (
          <span className="gov-input__char-count">
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  /** Label text displayed above the input */
  label: PropTypes.string,
  /** Input name attribute */
  name: PropTypes.string,
  /** Input type (text, email, tel, number, password, etc.) */
  type: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Controlled value */
  value: PropTypes.string,
  /** Default value for uncontrolled mode */
  defaultValue: PropTypes.string,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Read-only state */
  readOnly: PropTypes.bool,
  /** Invalid/error state */
  invalid: PropTypes.bool,
  /** Error message displayed when invalid */
  invalidMessage: PropTypes.string,
  /** Helper text displayed below input */
  helperText: PropTypes.string,
  /** Required field indicator */
  required: PropTypes.bool,
  /** Render as textarea (multiline) */
  multiline: PropTypes.bool,
  /** Number of visible rows for textarea */
  rows: PropTypes.number,
  /** Resize behavior for textarea */
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  /** Size variant */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Full width of container */
  fullWidth: PropTypes.bool,
  /** Maximum character length */
  maxLength: PropTypes.number,
  /** Show character count */
  showCharCount: PropTypes.bool,
  /** Icon element for left side */
  iconLeft: PropTypes.node,
  /** Icon element for right side */
  iconRight: PropTypes.node,
  /** Change handler */
  onChange: PropTypes.func,
  /** Focus handler */
  onFocus: PropTypes.func,
  /** Blur handler */
  onBlur: PropTypes.func,
  /** Keydown handler */
  onKeyDown: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Input;

