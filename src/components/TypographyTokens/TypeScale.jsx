import PropTypes from 'prop-types';
import './TypeScale.css';

/**
 * TypeScale - Visual representation of a typography scale
 * Shows all sizes with visual bars indicating relative scale
 */
export const TypeScale = ({ 
  scales = [],
  fontFamily = "'Roboto', sans-serif",
  showBars = true,
}) => {
  // Calculate max size for relative bar widths
  const maxSize = Math.max(...scales.map(s => parseInt(s.desktop || s.size)));
  
  return (
    <div className="type-scale">
      {scales.map((scale, index) => {
        const sizeValue = parseInt(scale.desktop || scale.size);
        const barWidth = (sizeValue / maxSize) * 100;
        const weightValue = scale.weight?.split(' ')[0] || '400';
        
        return (
          <div key={index} className="type-scale__item">
            <div className="type-scale__header">
              <span className="type-scale__name">{scale.name}</span>
              <span className="type-scale__size">{scale.desktop || scale.size}</span>
              {scale.mobile && (
                <span className="type-scale__mobile">→ {scale.mobile}</span>
              )}
            </div>
            
            {showBars && (
              <div className="type-scale__bar-container">
                <div 
                  className="type-scale__bar" 
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            )}
            
            <div 
              className="type-scale__preview"
              style={{
                fontSize: scale.desktop || scale.size,
                fontWeight: weightValue,
                lineHeight: scale.lineHeight || '1.25',
                letterSpacing: scale.letterSpacing === '0' ? '0' : scale.letterSpacing,
                fontFamily: fontFamily,
              }}
            >
              {scale.sampleText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

TypeScale.propTypes = {
  /** Array of typography scale definitions */
  scales: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    desktop: PropTypes.string,
    mobile: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    lineHeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    sampleText: PropTypes.string,
  })).isRequired,
  /** Font family to use for previews */
  fontFamily: PropTypes.string,
  /** Whether to show visual scale bars */
  showBars: PropTypes.bool,
};

/**
 * ResponsivePreview - Side-by-side desktop/mobile comparison
 */
export const ResponsivePreview = ({ 
  scales = [],
  fontFamily = "'Roboto', sans-serif",
}) => {
  return (
    <div className="responsive-preview">
      <div className="responsive-preview__column">
        <div className="responsive-preview__header">
          <span className="responsive-preview__icon">🖥️</span>
          <span className="responsive-preview__title">Desktop (&gt;768px)</span>
        </div>
        <div className="responsive-preview__content">
          {scales.map((scale, index) => (
            <div key={index} className="responsive-preview__item">
              <span className="responsive-preview__name">{scale.name}</span>
              <span className="responsive-preview__value">{scale.desktop}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="responsive-preview__column">
        <div className="responsive-preview__header">
          <span className="responsive-preview__icon">📱</span>
          <span className="responsive-preview__title">Mobile (≤768px)</span>
        </div>
        <div className="responsive-preview__content">
          {scales.map((scale, index) => (
            <div key={index} className="responsive-preview__item">
              <span className="responsive-preview__name">{scale.name}</span>
              <span className="responsive-preview__value">{scale.mobile}</span>
              <span className="responsive-preview__diff">
                ({parseInt(scale.mobile) - parseInt(scale.desktop)}px)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ResponsivePreview.propTypes = {
  scales: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  })).isRequired,
  fontFamily: PropTypes.string,
};

/**
 * TokenTable - Reference table for all typography tokens
 */
export const TokenTable = ({ tokens = [] }) => {
  return (
    <div className="token-table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Desktop</th>
            <th>Mobile</th>
            <th>Weight</th>
            <th>Line Height</th>
            <th>Letter Spacing</th>
            <th>CSS Variable</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td className="token-table__name">{token.name}</td>
              <td>{token.desktop}</td>
              <td>{token.mobile}</td>
              <td>{token.weight}</td>
              <td>{token.lineHeight}</td>
              <td>{token.letterSpacing}</td>
              <td><code>{token.cssVar}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TokenTable.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    desktop: PropTypes.string,
    mobile: PropTypes.string,
    weight: PropTypes.string,
    lineHeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    cssVar: PropTypes.string,
  })).isRequired,
};

/**
 * UsageGuidelines - Do's and Don'ts section
 */
export const UsageGuidelines = ({ dos = [], donts = [], tips = [] }) => {
  return (
    <div className="usage-guidelines">
      <div className="usage-guidelines__column usage-guidelines__dos">
        <h4>✅ Do</h4>
        <ul>
          {dos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="usage-guidelines__column usage-guidelines__donts">
        <h4>❌ Don&apos;t</h4>
        <ul>
          {donts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      {tips.length > 0 && (
        <div className="usage-guidelines__column usage-guidelines__tips">
          <h4>💡 Tips</h4>
          <ul>
            {tips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

UsageGuidelines.propTypes = {
  dos: PropTypes.arrayOf(PropTypes.string),
  donts: PropTypes.arrayOf(PropTypes.string),
  tips: PropTypes.arrayOf(PropTypes.string),
};

/**
 * AccessibilityInfo - Accessibility guidelines section
 */
export const AccessibilityInfo = ({ items = [] }) => {
  return (
    <div className="accessibility-info">
      <div className="accessibility-info__header">
        <span className="accessibility-info__icon">♿</span>
        <h4>Accessibility</h4>
      </div>
      <ul className="accessibility-info__list">
        {items.map((item, index) => (
          <li key={index} className={`accessibility-info__item accessibility-info__item--${item.status}`}>
            <span className="accessibility-info__status">
              {item.status === 'good' && '✅'}
              {item.status === 'warning' && '⚠️'}
              {item.status === 'error' && '❌'}
              {item.status === 'info' && 'ℹ️'}
            </span>
            <span className="accessibility-info__text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AccessibilityInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.oneOf(['good', 'warning', 'error', 'info']).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TypeScale;



