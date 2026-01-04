import { useState } from 'react';
import { FileUpload } from './FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
# FileUpload

The FileUpload component provides a way for users to upload files with drag & drop support.

## Features

- **Drag & drop** - Users can drag files directly onto the upload area
- **File type validation** - Restrict uploads to specific file types
- **Size validation** - Limit file size with custom error messages
- **Multiple files** - Support for single or multiple file uploads
- **File list** - Shows uploaded files with remove option
- **Accessibility** - Keyboard navigable with proper ARIA labels

## Usage

\`\`\`jsx
import { FileUpload } from '@/components/FileUpload';

// Single file upload
<FileUpload 
  label="Nahrát dokument"
  accept=".pdf,.doc,.docx"
  onChange={(files) => handleFiles(files)}
/>

// Multiple files with constraints
<FileUpload 
  label="Přílohy"
  multiple
  maxFiles={5}
  maxSize={10 * 1024 * 1024} // 10MB
  accept="image/*,.pdf"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the upload field',
      table: { category: 'Content' },
    },
    buttonText: {
      control: 'text',
      description: 'Text for the upload button',
      table: { category: 'Content' },
    },
    dragText: {
      control: 'text',
      description: 'Text shown for drag & drop hint',
      table: { category: 'Content' },
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., ".pdf,.doc" or "image/*")',
      table: { category: 'Constraints' },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
      table: { category: 'Constraints' },
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files (when multiple is true)',
      table: { category: 'Constraints' },
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
      table: { category: 'Constraints' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { category: 'State' },
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
      table: { category: 'State' },
    },
    invalidMessage: {
      control: 'text',
      description: 'Error message to display',
      table: { category: 'State' },
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the upload area',
      table: { category: 'Content' },
    },
    required: {
      control: 'boolean',
      description: 'Required indicator',
      table: { category: 'State' },
    },
    onChange: {
      action: 'files-changed',
      description: 'Callback when files are added/removed',
      table: { category: 'Events' },
    },
    onError: {
      action: 'validation-error',
      description: 'Callback when validation error occurs',
      table: { category: 'Events' },
    },
  },
};

// ============================================================================
// PLAYGROUND - Interactive story with all controls
// ============================================================================

export const Playground = {
  args: {
    label: 'Nahrát soubory',
    buttonText: 'Vložit soubor z počítače',
    dragText: 'nebo přetáhněte soubory sem',
    helperText: 'Podporované formáty: PDF, DOC, DOCX, JPG, PNG',
    multiple: false,
    disabled: false,
    invalid: false,
    required: false,
  },
};

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

export const Default = {
  args: {
    label: 'Nahrát soubor',
  },
  parameters: {
    controls: { disable: true },
  },
};

export const SingleFile = {
  args: {
    label: 'Životopis (CV)',
    helperText: 'Nahrajte váš životopis ve formátu PDF',
    accept: '.pdf',
    required: true,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Single file upload with PDF restriction.',
      },
    },
  },
};

export const MultipleFiles = {
  args: {
    label: 'Přílohy k žádosti',
    helperText: 'Můžete nahrát až 5 souborů, každý max. 5 MB',
    multiple: true,
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Multiple file upload with file count and size limits.',
      },
    },
  },
};

// ============================================================================
// STATES
// ============================================================================

export const Disabled = {
  args: {
    label: 'Nahrát soubor',
    disabled: true,
    helperText: 'Nahrávání souborů je momentálně nedostupné',
  },
  parameters: {
    controls: { disable: true },
  },
};

export const Invalid = {
  args: {
    label: 'Povinné přílohy',
    invalid: true,
    invalidMessage: 'Prosím nahrajte alespoň jeden soubor',
    required: true,
  },
  parameters: {
    controls: { disable: true },
  },
};

export const Required = {
  args: {
    label: 'Potvrzení o studiu',
    required: true,
    helperText: 'Povinná příloha k žádosti',
    accept: '.pdf,.jpg,.jpeg,.png',
  },
  parameters: {
    controls: { disable: true },
  },
};

export const WithHelperText = {
  args: {
    label: 'Fotografie',
    helperText: 'Nahrajte fotografii ve formátu JPG nebo PNG, maximálně 2 MB',
    accept: 'image/jpeg,image/png',
    maxSize: 2 * 1024 * 1024,
  },
  parameters: {
    controls: { disable: true },
  },
};

// ============================================================================
// TEXT CUSTOMIZATION
// ============================================================================

export const EnglishTexts = {
  args: {
    label: 'Upload files',
    buttonText: 'Choose file from computer',
    dragText: 'or drag and drop files here',
    helperText: 'Supported formats: PDF, DOC, DOCX',
    multiple: true,
    maxFiles: 10,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'File upload with English text customization.',
      },
    },
  },
};

// ============================================================================
// REAL-WORLD EXAMPLES
// ============================================================================

export const ExampleDocumentUpload = {
  render: () => {
    const [files, setFiles] = useState([]);
    
    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '16px', color: '#262626' }}>
          Elektronické přílohy
        </h3>
        <FileUpload
          label="Přílohy k žádosti"
          helperText="Přijímáme PDF, DOC, DOCX a obrazové soubory. Max. 10 MB na soubor."
          multiple
          maxFiles={5}
          maxSize={10 * 1024 * 1024}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={setFiles}
        />
        {files.length > 0 && (
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#686868' }}>
            Nahráno {files.length} {files.length === 1 ? 'soubor' : files.length < 5 ? 'soubory' : 'souborů'}
          </p>
        )}
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Realistic example of document upload for a government form.',
      },
    },
  },
};

export const ExampleImageUpload = {
  args: {
    label: 'Fotografie dokladu',
    buttonText: 'Vybrat fotografii',
    dragText: 'nebo přetáhněte obrázek sem',
    helperText: 'Nahrajte čitelnou fotografii dokladu totožnosti (max. 5 MB)',
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024,
    required: true,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Image-only upload for identity document photos.',
      },
    },
  },
};

export const ExampleFormWithUpload = {
  render: () => {
    const [files, setFiles] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (files.length === 0) {
        setError(true);
        return;
      }
      setError(false);
      setSubmitted(true);
    };
    
    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '24px', color: '#262626' }}>
          Odeslání žádosti
        </h3>
        
        <div style={{ marginBottom: '24px' }}>
          <FileUpload
            label="Naskenovaná žádost"
            helperText="Nahrajte podepsanou žádost ve formátu PDF"
            accept=".pdf"
            required
            invalid={error}
            invalidMessage={error ? 'Nahrajte prosím podepsanou žádost' : undefined}
            onChange={(f) => {
              setFiles(f);
              if (f.length > 0) setError(false);
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#2362a2',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Odeslat žádost
        </button>
        
        {submitted && (
          <p style={{ marginTop: '16px', color: '#1e7e34', fontWeight: 500 }}>
            ✓ Žádost byla úspěšně odeslána
          </p>
        )}
      </form>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Complete form example with file upload validation.',
      },
    },
  },
};

// ============================================================================
// ALL STATES OVERVIEW
// ============================================================================

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '500px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          Default
        </h4>
        <FileUpload label="Nahrát soubor" />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          With Helper Text
        </h4>
        <FileUpload 
          label="Nahrát soubor" 
          helperText="Podporované formáty: PDF, DOC, DOCX"
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          Required
        </h4>
        <FileUpload 
          label="Povinný soubor" 
          required
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          Disabled
        </h4>
        <FileUpload 
          label="Nahrát soubor" 
          disabled
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          Invalid
        </h4>
        <FileUpload 
          label="Povinná příloha" 
          invalid
          invalidMessage="Prosím nahrajte požadovaný soubor"
          required
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
          Multiple Files
        </h4>
        <FileUpload 
          label="Přílohy" 
          multiple
          maxFiles={5}
          helperText="Můžete nahrát až 5 souborů"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Overview of all FileUpload states.',
      },
    },
  },
};

