import CinematicButton from '../components/CinematicButton'

export default {
  title: 'Components/CinematicButton',
  component: CinematicButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
}

export const Primary = {
  args: {
    children: 'Primary Action',
    variant: 'primary',
    disabled: false,
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Action',
    variant: 'secondary',
    disabled: false,
  },
}

export const Ghost = {
  args: {
    children: 'Ghost Action',
    variant: 'ghost',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <CinematicButton variant="primary">Primary</CinematicButton>
      <CinematicButton variant="secondary">Secondary</CinematicButton>
      <CinematicButton variant="ghost">Ghost</CinematicButton>
    </div>
  ),
}
