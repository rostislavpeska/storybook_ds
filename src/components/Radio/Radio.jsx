import { useId, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import './Radio.css';

// Context for RadioGroup
const RadioGroupContext = createContext(null);

/**
 * RadioGroup component - container for Radio buttons.
 * 
 * Manages the selected value and provides context to child Radio components.
 * 
 * @component
 * @example
 * <RadioGroup 
 *   name="gender" 
 *   label="Pohlaví" 
 *   value={gender} 
 *   onChange={(e) => setGender(e.target.value)}
 * >
 *   <Radio value="male" label="Muž" />
 *   <Radio value="female" label="Žena" />
 * </RadioGroup>
 */
export const RadioGroup = ({
  // Core props
  name,
  label,
  
  // Value props
  value,
  defaultValue,
  
  // State props
  disabled = false,
  
  // Validation props
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  
  // Layout props
  direction = 'vertical',
  
  // Event handlers
  onChange,
  
  // Other
  id: providedId,
  className = '',
  children,
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  const contextValue = {
    name,
    value,
    defaultValue,
    disabled,
    invalid,
    onChange,
  };

  const classNames = [
    'gov-radio-group',
    `gov-radio-group--${direction}`,
    disabled && 'gov-radio-group--disabled',
    invalid && 'gov-radio-group--invalid',
    className,
  ].filter(Boolean).join(' ');

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <fieldset 
        className={classNames}
        aria-describedby={[
          helperText && helperId,
          invalid && invalidMessage && errorId,
        ].filter(Boolean).join(' ') || undefined}
        {...props}
      >
        {label && (
          <legend className="gov-radio-group__legend">
            {label}
            {required && <span className="gov-radio-group__required" aria-hidden="true"> *</span>}
          </legend>
        )}
        
        <div className="gov-radio-group__options">
          {children}
        </div>
        
        {helperText && !invalid && (
          <span id={helperId} className="gov-radio-group__helper">
            {helperText}
          </span>
        )}
        
        {invalid && invalidMessage && (
          <span id={errorId} className="gov-radio-group__error" role="alert">
            <svg className="gov-radio-group__error-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 4h2v5H7V4zm0 6h2v2H7v-2z"/>
            </svg>
            {invalidMessage}
          </span>
        )}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  /** Name attribute for all radio buttons in the group */
  name: PropTypes.string.isRequired,
  /** Group label (rendered as legend) */
  label: PropTypes.string,
  /** Controlled selected value */
  value: PropTypes.string,
  /** Default value for uncontrolled mode */
  defaultValue: PropTypes.string,
  /** Disable all radios in group */
  disabled: PropTypes.bool,
  /** Invalid/error state */
  invalid: PropTypes.bool,
  /** Error message */
  invalidMessage: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Required indicator */
  required: PropTypes.bool,
  /** Layout direction */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Change handler */
  onChange: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Radio button children */
  children: PropTypes.node,
};

/**
 * Radio component - individual radio button.
 * 
 * Can be used standalone or within a RadioGroup.
 * 
 * @component
 * @example
 * // Standalone
 * <Radio name="option" value="a" label="Option A" checked={selected === 'a'} onChange={...} />
 * 
 * // Within RadioGroup (preferred)
 * <RadioGroup name="option" value={selected} onChange={...}>
 *   <Radio value="a" label="Option A" />
 *   <Radio value="b" label="Option B" />
 * </RadioGroup>
 */
export const Radio = ({
  // Core props
  label,
  name: propName,
  value,
  
  // State props (for standalone use)
  checked: propChecked,
  defaultChecked,
  disabled: propDisabled = false,
  
  // Appearance props
  size = 'm',
  
  // Validation (for standalone use)
  invalid: propInvalid = false,
  
  // Helper text (for standalone with description)
  helperText,
  
  // Event handlers
  onChange: propOnChange,
  onFocus,
  onBlur,
  
  // Other
  id: providedId,
  className = '',
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  
  // Get context from RadioGroup (if exists)
  const groupContext = useContext(RadioGroupContext);
  
  // Resolve props from context or direct props
  const name = groupContext?.name || propName;
  const disabled = groupContext?.disabled || propDisabled;
  const invalid = groupContext?.invalid || propInvalid;
  const onChange = groupContext?.onChange || propOnChange;
  
  // Determine checked state
  let isChecked;
  if (groupContext) {
    // In a RadioGroup - check against group value
    isChecked = groupContext.value !== undefined 
      ? groupContext.value === value 
      : groupContext.defaultValue === value;
  } else {
    // Standalone
    isChecked = propChecked;
  }

  const classNames = [
    'gov-radio',
    `gov-radio--${size}`,
    isChecked && 'gov-radio--checked',
    disabled && 'gov-radio--disabled',
    invalid && 'gov-radio--invalid',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={classNames} htmlFor={id}>
      <span className="gov-radio__control">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={groupContext ? isChecked : propChecked}
          defaultChecked={!groupContext ? defaultChecked : undefined}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={invalid || undefined}
          className="gov-radio__input"
          {...props}
        />
        <span className="gov-radio__circle">
          <span className="gov-radio__dot" />
        </span>
      </span>
      
      <span className="gov-radio__content">
        <span className="gov-radio__label">{label}</span>
        {helperText && (
          <span className="gov-radio__helper">{helperText}</span>
        )}
      </span>
    </label>
  );
};

Radio.propTypes = {
  /** Label text */
  label: PropTypes.string.isRequired,
  /** Radio name (required for standalone, optional in RadioGroup) */
  name: PropTypes.string,
  /** Radio value */
  value: PropTypes.string.isRequired,
  /** Controlled checked state (for standalone use) */
  checked: PropTypes.bool,
  /** Default checked for uncontrolled (standalone) */
  defaultChecked: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Size variant */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Invalid state (for standalone use) */
  invalid: PropTypes.bool,
  /** Helper/description text below label */
  helperText: PropTypes.string,
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

export default Radio;


