import PropTypes from 'prop-types';
import './TypographyTokens.css';

/**
 * Individual type specimen display
 */
const TypeSpecimen = ({ 
  name, 
  cssVar, 
  size, 
  sampleText = 'The quick brown fox jumps over the lazy dog',
  usage,
  weight = '400',
  lineHeight = '1.5',
  letterSpacing = '0',
}) => {
  // Parse weight for style (extract number if format is "500 (Medium)")
  const weightValue = weight.split(' ')[0];
  
  const specimenStyle = {
    fontSize: `var(${cssVar})`,
    fontWeight: weightValue,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing === '0' ? '0' : letterSpacing,
    fontFamily: "'Roboto', sans-serif",
  };

  return (
    <div className="type-specimen">
      <div className="type-specimen__preview" style={specimenStyle}>
        {sampleText}
      </div>
      <div className="type-specimen__meta">
        <div className="type-specimen__name">{name}</div>
        <code className="type-specimen__var">{cssVar}</code>
        <div className="type-specimen__details">
          <span className="type-specimen__size">{size}</span>
          <span className="type-specimen__weight">weight: {weight}</span>
          <span className="type-specimen__line-height">line-height: {lineHeight}</span>
          {letterSpacing !== '0' && (
            <span className="type-specimen__letter-spacing">letter-spacing: {letterSpacing}</span>
          )}
        </div>
        {usage && <div className="type-specimen__usage">{usage}</div>}
      </div>
    </div>
  );
};

TypeSpecimen.propTypes = {
  name: PropTypes.string.isRequired,
  cssVar: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  sampleText: PropTypes.string,
  usage: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
};

/**
 * Typography Tokens - displays a collection of type specimens
 * Used for documenting the type scale in a design system
 */
export const TypographyTokens = ({ 
  title, 
  description,
  scales = [],
  sampleText,
}) => {
  return (
    <section className="typography-tokens">
      {title && <h2 className="typography-tokens__title">{title}</h2>}
      {description && <p className="typography-tokens__description">{description}</p>}
      <div className="typography-tokens__grid">
        {scales.map((scale, index) => (
          <TypeSpecimen 
            key={`${scale.cssVar}-${index}`}
            {...scale}
            sampleText={sampleText || scale.sampleText}
          />
        ))}
      </div>
    </section>
  );
};

TypographyTokens.propTypes = {
  /** Title of the typography section */
  title: PropTypes.string,
  /** Description of the typography section (supports multi-line) */
  description: PropTypes.string,
  /** Array of type scale definitions */
  scales: PropTypes.arrayOf(PropTypes.shape({
    /** Display name of the style (e.g., "display-l (Desktop)") */
    name: PropTypes.string.isRequired,
    /** CSS custom property name (e.g., "--gov-font-display-l") */
    cssVar: PropTypes.string.isRequired,
    /** Font size value (e.g., "56px") */
    size: PropTypes.string.isRequired,
    /** Sample text to display */
    sampleText: PropTypes.string,
    /** Usage guidelines for this style */
    usage: PropTypes.string,
    /** Font weight (e.g., "500 (Medium)" or "400") */
    weight: PropTypes.string,
    /** Line height value (e.g., "1.25") */
    lineHeight: PropTypes.string,
    /** Letter spacing value (e.g., "0" or "0.2px") */
    letterSpacing: PropTypes.string,
  })),
  /** Override sample text for all specimens */
  sampleText: PropTypes.string,
};

export default TypographyTokens;

