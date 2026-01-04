import { useState } from 'react';
import { Datepicker } from './Datepicker';

/**
 * # Datepicker
 * 
 * A date selection component following the GOV.cz design system.
 * 
 * ## Features
 * - Input field with calendar popup
 * - Keyboard navigation (arrow keys, Enter, Escape)
 * - Month/year navigation
 * - "Today" quick select
 * - Czech and English localization
 * - Min/max date constraints
 * - Controlled and uncontrolled modes
 * 
 * ## Date Format
 * Dates are displayed and entered in `dd.mm.yyyy` format (Czech standard).
 * 
 * ## Usage
 * 
 * ```jsx
 * // Uncontrolled
 * <Datepicker label="Datum narození" name="birthdate" />
 * 
 * // Controlled
 * const [date, setDate] = useState(null);
 * <Datepicker label="Datum" value={date} onChange={setDate} />
 * ```
 */
export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Content' },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
      table: { category: 'Content' },
    },
    
    // State
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { category: 'State' },
    },
    
    // Validation
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
      table: { category: 'Validation' },
    },
    invalidMessage: {
      control: 'text',
      description: 'Error message',
      table: { category: 'Validation' },
    },
    required: {
      control: 'boolean',
      description: 'Required field',
      table: { category: 'Validation' },
    },
    
    // Localization
    locale: {
      control: 'radio',
      options: ['cs', 'en'],
      description: 'Language for month/day names',
      table: { category: 'Localization' },
    },
    
    // Events
    onChange: {
      action: 'changed',
      description: 'Called when date changes',
      table: { category: 'Events' },
    },
  },
};

// =============================================================================
// PLAYGROUND
// =============================================================================

/**
 * Interactive playground - click the calendar icon or type a date.
 */
export const Playground = {
  render: function PlaygroundStory(args) {
    const [date, setDate] = useState(null);
    
    return (
      <div style={{ minHeight: '400px', paddingTop: '20px' }}>
        <Datepicker
          {...args}
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
            args.onChange?.(newDate);
          }}
        />
        {date && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected: {date.toLocaleDateString('cs-CZ')}
          </p>
        )}
      </div>
    );
  },
  args: {
    label: 'Datum narození',
    placeholder: 'dd.mm.rrrr',
    locale: 'cs',
  },
};

// =============================================================================
// STATES
// =============================================================================

/**
 * Default empty state.
 */
export const Default = {
  args: {
    label: 'Vyberte datum',
    placeholder: 'dd.mm.rrrr',
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '50px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * With a pre-selected date.
 */
export const WithValue = {
  args: {
    label: 'Datum nástupu',
    defaultValue: new Date(2025, 0, 15), // January 15, 2025
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '50px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * Disabled state.
 */
export const Disabled = {
  args: {
    label: 'Datum (neaktivní)',
    defaultValue: new Date(),
    disabled: true,
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '50px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * Invalid state with error message.
 */
export const Invalid = {
  args: {
    label: 'Datum narození',
    invalid: true,
    invalidMessage: 'Prosím zadejte platné datum narození',
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '80px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * Required field.
 */
export const Required = {
  args: {
    label: 'Povinné datum',
    required: true,
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '50px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * With helper text.
 */
export const WithHelperText = {
  args: {
    label: 'Datum platnosti',
    helperText: 'Zadejte datum ve formátu dd.mm.rrrr',
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '80px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

// =============================================================================
// LOCALIZATION
// =============================================================================

/**
 * Czech locale (default).
 */
export const LocaleCzech = {
  args: {
    label: 'Datum (česky)',
    locale: 'cs',
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '400px', paddingTop: '20px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

/**
 * English locale.
 */
export const LocaleEnglish = {
  args: {
    label: 'Date (English)',
    locale: 'en',
    placeholder: 'dd.mm.yyyy',
  },
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ minHeight: '400px', paddingTop: '20px' }}>
      <Datepicker {...args} />
    </div>
  ),
};

// =============================================================================
// CONSTRAINTS
// =============================================================================

/**
 * With minimum and maximum date constraints.
 */
export const WithDateRange = {
  parameters: { controls: { disable: true } },
  render: function DateRangeStory() {
    const [date, setDate] = useState(null);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    return (
      <div style={{ minHeight: '400px', paddingTop: '20px' }}>
        <Datepicker
          label="Datum rezervace"
          helperText="Vyberte datum v rozmezí příštích 30 dnů"
          value={date}
          onChange={setDate}
          minDate={minDate}
          maxDate={maxDate}
        />
        {date && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Vybráno: {date.toLocaleDateString('cs-CZ')}
          </p>
        )}
      </div>
    );
  },
};

// =============================================================================
// REAL-WORLD EXAMPLES
// =============================================================================

/**
 * Example: Birth date form field.
 */
export const ExampleBirthDate = {
  parameters: {
    controls: { disable: true },
  },
  render: function BirthDateStory() {
    const [date, setDate] = useState(null);
    const [error, setError] = useState('');
    
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    
    const handleChange = (newDate) => {
      setDate(newDate);
      if (newDate && newDate > maxDate) {
        setError('Musíte být starší 18 let');
      } else {
        setError('');
      }
    };

    return (
      <div style={{ 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px', 
        padding: '24px',
        maxWidth: '320px',
        minHeight: '150px',
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: '#111827' }}>
          Osobní údaje
        </h3>
        <Datepicker
          label="Datum narození"
          value={date}
          onChange={handleChange}
          maxDate={new Date()}
          invalid={!!error}
          invalidMessage={error}
          required
        />
      </div>
    );
  },
};

/**
 * Example: Event booking with date range.
 */
export const ExampleEventBooking = {
  parameters: {
    controls: { disable: true },
  },
  render: function EventBookingStory() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    const today = new Date();

    return (
      <div style={{ 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px', 
        padding: '24px',
        maxWidth: '320px',
        minHeight: '200px',
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: '#111827' }}>
          Rezervace ubytování
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Datepicker
            label="Příjezd"
            value={startDate}
            onChange={setStartDate}
            minDate={today}
            required
          />
          <Datepicker
            label="Odjezd"
            value={endDate}
            onChange={setEndDate}
            minDate={startDate || today}
            required
          />
        </div>
        {startDate && endDate && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Délka pobytu: {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))} nocí
          </p>
        )}
      </div>
    );
  },
};

// =============================================================================
// ALL STATES OVERVIEW
// =============================================================================

/**
 * Visual overview of all datepicker states.
 */
export const AllStates = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Default States
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Datepicker label="Empty" placeholder="dd.mm.rrrr" />
          <Datepicker label="With value" defaultValue={new Date(2025, 5, 15)} />
          <Datepicker label="With helper text" helperText="Pomocný text" />
        </div>
      </section>
      
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Validation States
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Datepicker label="Required" required />
          <Datepicker label="Invalid" invalid invalidMessage="Neplatné datum" />
          <Datepicker label="Disabled" disabled defaultValue={new Date()} />
        </div>
      </section>
    </div>
  ),
};

