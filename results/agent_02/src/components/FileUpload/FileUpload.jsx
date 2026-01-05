import { useId, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './FileUpload.css';

/**
 * FileUpload component for file input following the GOV.cz design system.
 * 
 * Supports single and multiple file uploads with drag & drop.
 * 
 * @component
 * @example
 * // Single file
 * <FileUpload 
 *   label="Nahrát dokument" 
 *   accept=".pdf,.doc,.docx"
 *   onChange={(files) => console.log(files)}
 * />
 * 
 * // Multiple files with drag & drop
 * <FileUpload 
 *   label="Přílohy" 
 *   multiple
 *   maxFiles={5}
 *   maxSize={10 * 1024 * 1024} // 10MB
 * />
 */
export const FileUpload = ({
  // Core props
  label,
  name,
  
  // File constraints
  accept,
  multiple = false,
  maxFiles = 10,
  maxSize, // in bytes
  
  // State props
  disabled = false,
  
  // Validation props
  invalid = false,
  invalidMessage,
  helperText,
  required = false,
  
  // Event handlers
  onChange,
  onError,
  
  // Other
  id: providedId,
  className = '',
  
  // Text customization
  buttonText = 'Vložit soubor z počítače',
  dragText = 'nebo přetáhněte soubory sem',
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const inputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  // Format file size for display
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Validate files
  const validateFiles = (fileList) => {
    const errors = [];
    const validFiles = [];

    Array.from(fileList).forEach((file) => {
      // Check max size
      if (maxSize && file.size > maxSize) {
        errors.push(`${file.name}: Soubor je příliš velký (max ${formatFileSize(maxSize)})`);
        return;
      }

      // Check file type
      if (accept) {
        const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        const mimeType = file.type.toLowerCase();
        
        const isAccepted = acceptedTypes.some(type => {
          if (type.startsWith('.')) {
            return fileExtension === type;
          }
          if (type.includes('*')) {
            return mimeType.startsWith(type.replace('*', ''));
          }
          return mimeType === type;
        });

        if (!isAccepted) {
          errors.push(`${file.name}: Nepodporovaný formát souboru`);
          return;
        }
      }

      validFiles.push(file);
    });

    return { validFiles, errors };
  };

  // Handle file selection
  const handleFiles = (fileList) => {
    const { validFiles, errors } = validateFiles(fileList);
    
    let newFiles;
    if (multiple) {
      const totalFiles = [...files, ...validFiles];
      if (totalFiles.length > maxFiles) {
        errors.push(`Maximální počet souborů je ${maxFiles}`);
        newFiles = totalFiles.slice(0, maxFiles);
      } else {
        newFiles = totalFiles;
      }
    } else {
      newFiles = validFiles.slice(0, 1);
    }

    setFiles(newFiles);
    
    if (errors.length > 0) {
      setError(errors.join('. '));
      onError?.(errors);
    } else {
      setError(null);
    }

    onChange?.(newFiles);
  };

  // Handle input change
  const handleInputChange = (event) => {
    handleFiles(event.target.files);
    // Reset input to allow selecting the same file again
    event.target.value = '';
  };

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // Remove file
  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    setError(null);
    onChange?.(newFiles);
  };

  // Trigger file input
  const triggerInput = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const classNames = [
    'gov-file-upload',
    isDragging && 'gov-file-upload--dragging',
    disabled && 'gov-file-upload--disabled',
    (invalid || error) && 'gov-file-upload--invalid',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {label && (
        <label className="gov-file-upload__label">
          {label}
          {required && <span className="gov-file-upload__required" aria-hidden="true"> *</span>}
        </label>
      )}
      
      <div
        className="gov-file-upload__dropzone"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerInput}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerInput();
          }
        }}
        aria-describedby={[
          helperText && helperId,
          (invalid || error) && errorId,
        ].filter(Boolean).join(' ') || undefined}
      >
        <input
          ref={inputRef}
          type="file"
          id={id}
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className="gov-file-upload__input"
          aria-invalid={(invalid || !!error) || undefined}
          {...props}
        />
        
        <div className="gov-file-upload__content">
          <svg className="gov-file-upload__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17,8 12,3 7,8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          
          <button 
            type="button" 
            className="gov-file-upload__button"
            disabled={disabled}
            onClick={(e) => e.stopPropagation()}
          >
            {buttonText}
          </button>
          
          {dragText && (
            <span className="gov-file-upload__drag-text">{dragText}</span>
          )}
        </div>
      </div>
      
      {/* File list */}
      {files.length > 0 && (
        <ul className="gov-file-upload__file-list">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="gov-file-upload__file-item">
              <svg className="gov-file-upload__file-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="gov-file-upload__file-name">{file.name}</span>
              <span className="gov-file-upload__file-size">{formatFileSize(file.size)}</span>
              <button
                type="button"
                className="gov-file-upload__remove-button"
                onClick={() => removeFile(index)}
                aria-label={`Odebrat ${file.name}`}
              >
                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      
      <div className="gov-file-upload__footer">
        {helperText && !(invalid || error) && (
          <span id={helperId} className="gov-file-upload__helper">
            {helperText}
          </span>
        )}
        
        {(invalid && invalidMessage) || error ? (
          <span id={errorId} className="gov-file-upload__error" role="alert">
            <svg className="gov-file-upload__error-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 4h2v5H7V4zm0 6h2v2H7v-2z"/>
            </svg>
            {invalidMessage || error}
          </span>
        ) : null}
        
        {multiple && maxFiles && (
          <span className="gov-file-upload__count">
            {files.length} / {maxFiles} souborů
          </span>
        )}
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  /** Label text */
  label: PropTypes.string,
  /** Input name attribute */
  name: PropTypes.string,
  /** Accepted file types (e.g., ".pdf,.doc" or "image/*") */
  accept: PropTypes.string,
  /** Allow multiple files */
  multiple: PropTypes.bool,
  /** Maximum number of files */
  maxFiles: PropTypes.number,
  /** Maximum file size in bytes */
  maxSize: PropTypes.number,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Invalid/error state */
  invalid: PropTypes.bool,
  /** Error message */
  invalidMessage: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Required indicator */
  required: PropTypes.bool,
  /** File change handler (receives array of File objects) */
  onChange: PropTypes.func,
  /** Error handler (receives array of error messages) */
  onError: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Button text */
  buttonText: PropTypes.string,
  /** Drag & drop text */
  dragText: PropTypes.string,
};

export default FileUpload;

