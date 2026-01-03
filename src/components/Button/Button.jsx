import PropTypes from 'prop-types';
import './Button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Visual style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  /** Size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Button contents */
  children: PropTypes.node.isRequired,
  /** Click handler */
  onClick: PropTypes.func,
};

