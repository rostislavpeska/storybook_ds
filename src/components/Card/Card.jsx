import PropTypes from 'prop-types';
import './Card.css';

/**
 * Card component for displaying content in a contained box
 */
export const Card = ({
  title,
  description,
  image,
  variant = 'default',
  children,
  onClick,
  ...props
}) => {
  const Component = onClick ? 'button' : 'article';
  
  return (
    <Component
      className={`card card--${variant} ${onClick ? 'card--clickable' : ''}`}
      onClick={onClick}
      {...props}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt="" />
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {children}
      </div>
    </Component>
  );
};

Card.propTypes = {
  /** Card title */
  title: PropTypes.string,
  /** Card description text */
  description: PropTypes.string,
  /** Image URL for the card header */
  image: PropTypes.string,
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'gradient']),
  /** Card body content */
  children: PropTypes.node,
  /** Click handler - makes the card interactive */
  onClick: PropTypes.func,
};

