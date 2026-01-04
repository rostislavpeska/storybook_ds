# Round B Update - Replace Homepage Layout Components

**For**: Agent 02 (gov-test-figma project)  
**Task**: Replace hallucinated Header, LanguageSwitcher, and Footer with Storybook components  
**Date**: January 4, 2026

---

## 📋 COPY THE PROMPT BELOW

---

# 🔄 Update Task: Replace Homepage Layout Components

You previously built a GOV.cz form application in `gov-test-figma`. The homepage currently uses **hallucinated** Header, LanguageSwitcher, and Footer components. 

Your task is to **replace them** with the official synthetic components from our Storybook.

---

## 🎯 What to Replace

| Current (Hallucinated) | Replace With |
|------------------------|--------------|
| Homepage header | `Header` component from Storybook |
| Language switcher | `LanguageSwitcher` (integrated in Header) |
| Homepage footer | `Footer` component from Storybook |

**Scope**: Homepage only (`/` route)

---

## 📦 Copy Components from Storybook

First, copy the new components from Storybook DS to your project:

```powershell
# From your gov-test-figma project directory
$StorybookPath = "C:\Users\TIGO\Desktop\WORKSPACE\Storybook DS\src\components"

# Copy Header component
Copy-Item -Recurse "$StorybookPath\Header" "src\components\"

# Copy Footer component  
Copy-Item -Recurse "$StorybookPath\Footer" "src\components\"

# Copy LanguageSwitcher component (used by Header)
Copy-Item -Recurse "$StorybookPath\LanguageSwitcher" "src\components\"
```

---

## 🔧 Header Component Usage

The Header component includes:
- **Czech lion logo** (official GOV.cz heraldic lion)
- **App name** (configurable)
- **Language switcher** (built-in)
- **Navigation links**
- **Skip link** (accessibility)
- **Blue accent bar**

**Props**:
```jsx
import { Header } from './components/Header';

<Header
  appName="Portál formulářů"        // Your app name
  appNameHref="/"                   // Link for logo/name
  showLogo={true}                   // Show Czech lion
  navigation={[
    { label: 'Formuláře', href: '/', active: true },
    // Add more nav items if needed
  ]}
  showLanguageSwitcher={true}
  languages={[
    { code: 'cs', label: 'Čeština', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ]}
  currentLanguage={language}        // Your language state
  onLanguageChange={setLanguage}    // Your language setter
/>
```

---

## 🔧 Footer Component Usage

The Footer component includes:
- **Link columns** (configurable)
- **Contact section** (email, phone)
- **Social links** (optional)
- **Partner logos** (optional)
- **Bottom bar** (copyright, legal links)
- **Back to top button**

**Props**:
```jsx
import { Footer } from './components/Footer';

<Footer
  columns={[
    {
      title: 'Informace',
      links: [
        { label: 'O portálu', href: '/about' },
        { label: 'Prohlášení o přístupnosti', href: '/accessibility' },
      ]
    }
  ]}
  contact={{
    title: 'Kontakt',
    email: 'info@gov.cz'
  }}
  copyright={`© ${new Date().getFullYear()} GOV.cz Forms`}
  bottomLinks={[
    { label: 'Ochrana soukromí', href: '/privacy' },
    { label: 'Podmínky užití', href: '/terms' }
  ]}
  version="1.0.0"
  showBackToTop={true}
/>
```

---

## ⚠️ Important Notes

1. **CSS Import**: Make sure to import the component CSS files:
```jsx
// In your main App.jsx or layout component
import './components/Header/Header.css';
import './components/Footer/Footer.css';
import './components/LanguageSwitcher/LanguageSwitcher.css';
```

2. **Language State**: Connect to your existing i18n state:
```jsx
const [language, setLanguage] = useState('cs');

// Pass to Header
<Header 
  currentLanguage={language}
  onLanguageChange={setLanguage}
/>
```

3. **Main Content ID**: For skip link accessibility, add `id="main-content"` to your main content area:
```jsx
<main id="main-content">
  {/* Your page content */}
</main>
```

4. **Remove Old Components**: Delete or comment out your old hallucinated header/footer code.

---

## ✅ Expected Result

After this update, the homepage should have:

1. **Header**:
   - Czech lion logo (blue, heraldic)
   - App name: "Portál formulářů" (or your chosen name)
   - Language switcher (CZ/EN toggle with globe icon)
   - Blue accent bar under header

2. **Footer**:
   - Link columns with proper styling
   - Copyright text
   - Back to top button (bottom right)
   - Gray background (#f2f2f2)

---

## 📸 Deliverable

After completing the update:
1. Take a screenshot of the updated homepage
2. Confirm the language switcher works
3. Confirm the back to top button works

---

## 🚫 Do NOT

- Create new Header/Footer components from scratch
- Modify the Storybook component source files
- Change the form page (only update homepage)

---

# 📋 END OF PROMPT

---

*This prompt is for updating the existing gov-test-figma application.*

