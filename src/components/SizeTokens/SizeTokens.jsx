import PropTypes from 'prop-types';
import './SizeTokens.css';

/**
 * SizeBar - Visual representation of a size value with proportional bar
 */
export const SizeBar = ({ name, value, cssVar, maxValue = 120, description }) => {
  const numericValue = parseInt(value);
  const barWidth = Math.min((numericValue / maxValue) * 100, 100);

  return (
    <div className="size-bar">
      <div className="size-bar__header">
        <span className="size-bar__name">{name}</span>
        <span className="size-bar__value">{value}</span>
      </div>
      <div className="size-bar__track">
        <div
          className="size-bar__fill"
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <code className="size-bar__var">{cssVar}</code>
      {description && <span className="size-bar__desc">{description}</span>}
    </div>
  );
};

SizeBar.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cssVar: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  description: PropTypes.string,
};

/**
 * SizeBox - Visual representation using a box (for heights, radii)
 */
export const SizeBox = ({ name, value, cssVar, type = 'height', description }) => {
  const numericValue = parseInt(value);

  const getBoxStyle = () => {
    switch (type) {
      case 'height':
        return { height: value, width: '100%', maxWidth: '200px' };
      case 'radius':
        return { 
          height: '60px', 
          width: '60px', 
          borderRadius: value,
        };
      case 'icon':
        return { 
          height: value, 
          width: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `calc(${value} * 0.6)`,
        };
      default:
        return { height: value, width: value };
    }
  };

  return (
    <div className="size-box">
      <div className="size-box__visual" style={getBoxStyle()}>
        {type === 'icon' && '★'}
      </div>
      <div className="size-box__meta">
        <span className="size-box__name">{name}</span>
        <span className="size-box__value">{value}</span>
        <code className="size-box__var">{cssVar}</code>
        {description && <span className="size-box__desc">{description}</span>}
      </div>
    </div>
  );
};

SizeBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cssVar: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['height', 'radius', 'icon']),
  description: PropTypes.string,
};

/**
 * LineHeightDemo - Shows text with visible line height
 */
export const LineHeightDemo = ({ name, value, cssVar, fontSize = '16px' }) => {
  return (
    <div className="line-height-demo">
      <div className="line-height-demo__header">
        <span className="line-height-demo__name">{name}</span>
        <span className="line-height-demo__value">{value}</span>
      </div>
      <div className="line-height-demo__visual">
        <div 
          className="line-height-demo__text"
          style={{ lineHeight: value, fontSize }}
        >
          <span className="line-height-demo__line">První řádek textu</span>
          <span className="line-height-demo__line">Druhý řádek textu</span>
          <span className="line-height-demo__line">Třetí řádek textu</span>
        </div>
        <div className="line-height-demo__icon" style={{ height: value }}>
          <span>★</span>
        </div>
      </div>
      <code className="line-height-demo__var">{cssVar}</code>
    </div>
  );
};

LineHeightDemo.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cssVar: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

/**
 * SizeTokenTable - Reference table for size tokens
 */
export const SizeTokenTable = ({ tokens = [], showDescription = true }) => {
  return (
    <div className="size-token-table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>CSS Variable</th>
            {showDescription && <th>Usage</th>}
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td><strong>{token.value}</strong></td>
              <td><code>{token.cssVar}</code></td>
              {showDescription && <td>{token.description || '-'}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SizeTokenTable.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    cssVar: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
  showDescription: PropTypes.bool,
};

/**
 * SizeTokens - Main container component
 */
export const SizeTokens = ({ title, description, children }) => {
  return (
    <div className="size-tokens">
      {title && <h2 className="size-tokens__title">{title}</h2>}
      {description && <p className="size-tokens__description">{description}</p>}
      <div className="size-tokens__content">
        {children}
      </div>
    </div>
  );
};

SizeTokens.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};


