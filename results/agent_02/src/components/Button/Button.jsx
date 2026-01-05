import PropTypes from 'prop-types';
import './Button.css';

/**
 * GOV.cz Button Component
 * 
 * A versatile button component following the GOV.cz design system.
 * Supports multiple colors, types, sizes, and states.
 * 
 * @example
 * // Solid primary button (default)
 * <Button>Click me</Button>
 * 
 * // Outlined secondary button
 * <Button color="secondary" type="outlined">Secondary</Button>
 * 
 * // Large success button with icons
 * <Button color="success" size="l" leftIcon={<Icon name="check" />}>Confirm</Button>
 */
export const Button = ({
  color = 'primary',
  type = 'solid',
  size = 'm',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  ...props
}) => {
  const classNames = [
    'gov-button',
    `gov-button--${color}`,
    `gov-button--${type}`,
    `gov-button--${size}`,
    disabled && 'gov-button--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="gov-button__icon gov-button__icon--left">{leftIcon}</span>}
      {children && <span className="gov-button__label">{children}</span>}
      {rightIcon && <span className="gov-button__icon gov-button__icon--right">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  /** Color variant - matches GOV.cz semantic colors */
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral', 'error', 'warning', 'success']),
  /** Button type - visual style */
  type: PropTypes.oneOf(['solid', 'outlined', 'base', 'link']),
  /** Size variant - matches GOV.cz component height tokens */
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Button text content */
  children: PropTypes.node,
  /** Icon to display on the left side */
  leftIcon: PropTypes.node,
  /** Icon to display on the right side */
  rightIcon: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Button;
