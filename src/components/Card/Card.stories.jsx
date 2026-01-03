import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'gradient'],
    },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content. It provides additional context about the card.',
    variant: 'default',
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Card',
    description: 'This card has an elevated shadow effect for emphasis.',
    variant: 'elevated',
  },
};

export const Outlined = {
  args: {
    title: 'Outlined Card',
    description: 'This card uses a border outline style.',
    variant: 'outlined',
  },
};

export const Gradient = {
  args: {
    title: 'Gradient Border',
    description: 'This card features a beautiful gradient border effect.',
    variant: 'gradient',
  },
};

export const WithImage = {
  args: {
    title: 'Card with Image',
    description: 'Cards can include header images for visual appeal.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop',
    variant: 'default',
  },
};

export const Clickable = {
  args: {
    title: 'Clickable Card',
    description: 'Click me! Interactive cards can be used for navigation.',
    variant: 'elevated',
    onClick: () => console.log('Card clicked!'),
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '850px' }}>
      <Card title="Default" description="Standard card style" variant="default" />
      <Card title="Elevated" description="With shadow effect" variant="elevated" />
      <Card title="Outlined" description="Border outline style" variant="outlined" />
      <Card title="Gradient" description="Gradient border effect" variant="gradient" />
    </div>
  ),
};


