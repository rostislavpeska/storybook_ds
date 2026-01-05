import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import './Card.css';

/**
 * Card component for displaying content in a contained box.
 * Based on the GOV.cz Design System - gov-materials-4-2-5.
 * 
 * Supports vertical and horizontal layouts, with optional image,
 * title, date/metadata, and description.
 */
export const Card = ({
  title,
  description,
  image,
  imageAlt = '',
  date,
  dateIcon = 'calendar',
  direction = 'vertical',
  imageSize = 'm',
  state = 'default',
  showImage = true,
  tags,
  children,
  onClick,
  href,
  className = '',
  ...props
}) => {
  // Determine if the card is interactive
  const isInteractive = onClick || href;
  
  // Build class names
  const cardClasses = [
    'gov-card',
    `gov-card--${direction}`,
    `gov-card--image-${imageSize}`,
    `gov-card--state-${state}`,
    isInteractive ? 'gov-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');

  // Render content section
  const renderContent = () => (
    <div className="gov-card__content">
      <div className="gov-card__header">
        <div className="gov-card__heading">
          {title && (
            <h3 className="gov-card__title">{title}</h3>
          )}
          {date && (
            <div className="gov-card__subheadline">
              <div className="gov-card__meta">
                {dateIcon && (
                  <Icon name={dateIcon} size="s" className="gov-card__meta-icon" />
                )}
                <span className="gov-card__date">{date}</span>
              </div>
            </div>
          )}
        </div>
        {description && (
          <p className="gov-card__description">{description}</p>
        )}
      </div>
      {tags && tags.length > 0 && (
        <div className="gov-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="gov-card__tag">
              <Icon name="tag" size="xs" className="gov-card__tag-icon" />
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  );

  // Render image section
  const renderImage = () => (
    showImage && image ? (
      <div className="gov-card__image">
        <div className="gov-card__photo">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    ) : null
  );

  // Card wrapper content
  const cardContent = (
    <>
      {renderImage()}
      {renderContent()}
    </>
  );

  // Render as link, button, or article
  if (href) {
    return (
      <a
        href={href}
        className={cardClasses}
        {...props}
      >
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={cardClasses}
        onClick={onClick}
        {...props}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <article className={cardClasses} {...props}>
      {cardContent}
    </article>
  );
};

Card.propTypes = {
  /** Card title - displayed as the main heading */
  title: PropTypes.string,
  /** Card description text */
  description: PropTypes.string,
  /** Image URL for the card */
  image: PropTypes.string,
  /** Alt text for the image */
  imageAlt: PropTypes.string,
  /** Date or metadata text displayed with icon */
  date: PropTypes.string,
  /** Icon name for the date/metadata */
  dateIcon: PropTypes.string,
  /** Card layout direction */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Image size variant */
  imageSize: PropTypes.oneOf(['m', 'l']),
  /** Card state */
  state: PropTypes.oneOf(['default', 'hover', 'active', 'loading']),
  /** Whether to show the image section */
  showImage: PropTypes.bool,
  /** Array of tag strings to display */
  tags: PropTypes.arrayOf(PropTypes.string),
  /** Card body content (custom children) */
  children: PropTypes.node,
  /** Click handler - makes the card a button */
  onClick: PropTypes.func,
  /** Link URL - makes the card an anchor */
  href: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Card;
