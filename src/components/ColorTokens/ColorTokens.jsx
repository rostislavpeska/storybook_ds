import './ColorTokens.css';

/**
 * ColorSwatch - displays a single color token
 */
const ColorSwatch = ({ name, value, cssVar, usage }) => (
  <div className="color-swatch">
    <div 
      className="color-swatch__preview" 
      style={{ backgroundColor: value }}
    />
    <div className="color-swatch__info">
      <code className="color-swatch__var">{cssVar}</code>
      <span className="color-swatch__value">{value}</span>
      <span className="color-swatch__name">{name}</span>
      {usage && <span className="color-swatch__usage">{usage}</span>}
    </div>
  </div>
);

/**
 * ColorTokens - displays a group of color tokens
 */
export const ColorTokens = ({ colors, title }) => (
  <div className="color-tokens">
    {title && <h3 className="color-tokens__title">{title}</h3>}
    <div className="color-tokens__grid">
      {colors.map((color, index) => (
        <ColorSwatch key={index} {...color} />
      ))}
    </div>
  </div>
);

