import { Card } from './Card';

/**
 * # Card Component
 * 
 * Cards are used to display content in a contained, visually distinct box.
 * Based on the GOV.cz Design System (gov-materials-4-2-5).
 * 
 * ## Features
 * - **Vertical & Horizontal layouts** - Flexible direction options
 * - **Optional image** - With configurable sizes (m, l)
 * - **Metadata support** - Date with icon display
 * - **Tag support** - Display categorization tags
 * - **Interactive states** - Clickable cards with hover/focus states
 * - **Accessibility** - Proper semantic HTML (article, button, or anchor)
 * 
 * ## Usage
 * 
 * ```jsx
 * import { Card } from '@/components/Card';
 * 
 * <Card
 *   title="Article Title"
 *   description="A brief description of the content."
 *   image="https://example.com/image.jpg"
 *   date="15.01.2026"
 *   direction="vertical"
 *   onClick={() => handleClick()}
 * />
 * ```
 */
export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Card layout direction',
    },
    imageSize: {
      control: 'select',
      options: ['m', 'l'],
      description: 'Image size variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'loading'],
      description: 'Card visual state',
    },
    showImage: {
      control: 'boolean',
      description: 'Whether to show the image',
    },
    onClick: { action: 'clicked' },
  },
};

// Sample placeholder image
const sampleImage = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop';

/* ========================================
   Default Story
   ======================================== */

export const Default = {
  args: {
    title: 'Article title',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at...',
    image: sampleImage,
    date: '15.01.2026',
    direction: 'vertical',
    imageSize: 'm',
    showImage: true,
  },
};

/* ========================================
   Vertical Card
   ======================================== */

export const Vertical = {
  args: {
    title: 'Vertical Card Layout',
    description: 'This is the default vertical card layout with image on top and content below.',
    image: sampleImage,
    date: '10.12.2025',
    direction: 'vertical',
    imageSize: 'm',
  },
};

/* ========================================
   Horizontal Card
   ======================================== */

export const Horizontal = {
  args: {
    title: 'Horizontal Card Layout',
    description: 'This horizontal layout places the image on the left side with content on the right.',
    image: sampleImage,
    date: '10.12.2025',
    direction: 'horizontal',
    imageSize: 'm',
  },
};

/* ========================================
   Large Image
   ======================================== */

export const LargeImage = {
  args: {
    title: 'Card with Large Image',
    description: 'Using the large image size variant for more visual emphasis.',
    image: sampleImage,
    date: '10.12.2025',
    direction: 'vertical',
    imageSize: 'l',
  },
};

/* ========================================
   Without Image
   ======================================== */

export const WithoutImage = {
  args: {
    title: 'Card Without Image',
    description: 'Cards can be displayed without images when visual content is not available or needed.',
    date: '10.12.2025',
    showImage: false,
  },
};

/* ========================================
   Without Date
   ======================================== */

export const WithoutDate = {
  args: {
    title: 'Card Without Date',
    description: 'This card displays without the date metadata, useful for non-time-sensitive content.',
    image: sampleImage,
  },
};

/* ========================================
   With Tags
   ======================================== */

export const WithTags = {
  args: {
    title: 'Card with Tags',
    description: 'Cards can display category tags for better content organization.',
    image: sampleImage,
    date: '10.12.2025',
    tags: ['Category', 'News'],
  },
};

/* ========================================
   Clickable Card
   ======================================== */

export const Clickable = {
  args: {
    title: 'Interactive Card',
    description: 'This card is clickable and will trigger an action when clicked.',
    image: sampleImage,
    date: '10.12.2025',
    onClick: () => console.log('Card clicked!'),
  },
};

/* ========================================
   Link Card
   ======================================== */

export const LinkCard = {
  args: {
    title: 'Link Card',
    description: 'This card acts as a link and will navigate to a URL when clicked.',
    image: sampleImage,
    date: '10.12.2025',
    href: '#',
  },
};

/* ========================================
   States Showcase
   ======================================== */

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <p style={{ 
          marginBottom: '12px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 500, 
          color: '#262626' 
        }}>
          Default State
        </p>
        <Card
          title="Default State"
          description="The card in its default resting state."
          image={sampleImage}
          date="15.01.2026"
          state="default"
        />
      </div>
      <div>
        <p style={{ 
          marginBottom: '12px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 500, 
          color: '#262626' 
        }}>
          Hover State
        </p>
        <Card
          title="Hover State"
          description="The card when hovered over (elevated with shadow)."
          image={sampleImage}
          date="15.01.2026"
          state="hover"
        />
      </div>
      <div>
        <p style={{ 
          marginBottom: '12px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 500, 
          color: '#262626' 
        }}>
          Active State
        </p>
        <Card
          title="Active State"
          description="The card when being pressed/clicked."
          image={sampleImage}
          date="15.01.2026"
          state="active"
        />
      </div>
      <div>
        <p style={{ 
          marginBottom: '12px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 500, 
          color: '#262626' 
        }}>
          Loading State
        </p>
        <Card
          title="Loading State"
          description="The card when content is loading."
          image={sampleImage}
          date="15.01.2026"
          state="loading"
        />
      </div>
    </div>
  ),
};

/* ========================================
   Direction Comparison
   ======================================== */

export const DirectionComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#262626' 
        }}>
          Vertical Direction
        </h3>
        <Card
          title="Vertical Card"
          description="Image on top, content below. Best for grid layouts."
          image={sampleImage}
          date="15.01.2026"
          direction="vertical"
        />
      </div>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#262626' 
        }}>
          Horizontal Direction
        </h3>
        <Card
          title="Horizontal Card"
          description="Image on left, content on right. Best for list layouts."
          image={sampleImage}
          date="15.01.2026"
          direction="horizontal"
        />
      </div>
    </div>
  ),
};

/* ========================================
   Image Size Comparison
   ======================================== */

export const ImageSizeComparison = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '850px' }}>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 600, 
          color: '#262626' 
        }}>
          Image Size: M (198px)
        </h3>
        <Card
          title="Medium Image"
          description="Standard image size for balanced layouts."
          image={sampleImage}
          date="15.01.2026"
          imageSize="m"
        />
      </div>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          fontWeight: 600, 
          color: '#262626' 
        }}>
          Image Size: L (280px)
        </h3>
        <Card
          title="Large Image"
          description="Larger image for more visual impact."
          image={sampleImage}
          date="15.01.2026"
          imageSize="l"
        />
      </div>
    </div>
  ),
};

/* ========================================
   Card Grid Example
   ======================================== */

export const CardGrid = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '24px', 
      maxWidth: '1200px',
      padding: '24px',
    }}>
      <Card
        title="News Article 1"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        image={sampleImage}
        date="15.01.2026"
        tags={['News']}
        onClick={() => console.log('Card 1')}
      />
      <Card
        title="News Article 2"
        description="Maecenas aliquet accumsan leo. Nullam sit amet magna in magna gravida vehicula."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
        date="14.01.2026"
        tags={['Updates']}
        onClick={() => console.log('Card 2')}
      />
      <Card
        title="News Article 3"
        description="Cras pede libero, dapibus nec, pretium sit amet, tempor quis."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop"
        date="13.01.2026"
        tags={['Events']}
        onClick={() => console.log('Card 3')}
      />
    </div>
  ),
};

/* ========================================
   Horizontal List Example
   ======================================== */

export const HorizontalList = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      maxWidth: '600px',
    }}>
      <Card
        title="First Article in List"
        description="Horizontal cards work great in list layouts."
        image={sampleImage}
        date="15.01.2026"
        direction="horizontal"
        onClick={() => console.log('Card 1')}
      />
      <Card
        title="Second Article in List"
        description="They're compact and show key information at a glance."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
        date="14.01.2026"
        direction="horizontal"
        onClick={() => console.log('Card 2')}
      />
      <Card
        title="Third Article in List"
        description="Perfect for news feeds, search results, or sidebars."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop"
        date="13.01.2026"
        direction="horizontal"
        onClick={() => console.log('Card 3')}
      />
    </div>
  ),
};

/* ========================================
   All Variants Matrix
   ======================================== */

export const AllVariants = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ 
        marginBottom: '24px', 
        fontFamily: 'Roboto, sans-serif', 
        fontSize: '24px', 
        fontWeight: 600, 
        color: '#262626' 
      }}>
        Card Component Variants
      </h2>
      
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '18px', 
          fontWeight: 500, 
          color: '#1e5086',
          borderBottom: '2px solid #e7e7e7',
          paddingBottom: '8px',
        }}>
          Direction & Image Variants
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
              Vertical / Image M
            </span>
            <Card
              title="Vertical Medium"
              description="Standard vertical card with medium image."
              image={sampleImage}
              date="15.01.2026"
              direction="vertical"
              imageSize="m"
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
              Vertical / Image L
            </span>
            <Card
              title="Vertical Large"
              description="Vertical card with large image."
              image={sampleImage}
              date="15.01.2026"
              direction="vertical"
              imageSize="l"
            />
          </div>
        </div>
        <div style={{ marginTop: '24px' }}>
          <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
            Horizontal / Image M
          </span>
          <Card
            title="Horizontal Medium"
            description="Horizontal card with medium image."
            image={sampleImage}
            date="15.01.2026"
            direction="horizontal"
            imageSize="m"
          />
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ 
          marginBottom: '16px', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '18px', 
          fontWeight: 500, 
          color: '#1e5086',
          borderBottom: '2px solid #e7e7e7',
          paddingBottom: '8px',
        }}>
          Content Variants
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
              With All Content
            </span>
            <Card
              title="Full Content Card"
              description="Card with image, title, date, and tags."
              image={sampleImage}
              date="15.01.2026"
              tags={['Tag 1', 'Tag 2']}
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
              Without Image
            </span>
            <Card
              title="Text Only Card"
              description="Card without image, just text content."
              date="15.01.2026"
              showImage={false}
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#6d6d6d', marginBottom: '8px', display: 'block' }}>
              Minimal
            </span>
            <Card
              title="Minimal Card"
              description="Just title and description."
              showImage={false}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
