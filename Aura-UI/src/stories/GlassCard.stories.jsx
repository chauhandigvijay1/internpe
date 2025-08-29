import GlassCard from '../components/GlassCard'

export default {
  title: 'Components/GlassCard',
  component: GlassCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    children: { control: 'text' },
  },
}

export const Default = {
  args: {
    title: 'Glass Card',
    description: 'This is a frosted glass panel with backdrop blur and a subtle border glow.',
  },
}

export const WithCustomContent = {
  args: {
    title: 'Card With Children',
    description: 'This card also renders child elements below the description.',
    children: <div className="text-sm text-aura-accent">Extra content here</div>,
  },
}

export const LongContent = {
  args: {
    title: 'Detailed Analytics',
    description:
      'Comprehensive data analysis showing user engagement metrics across all platforms with real-time updates and historical trends.',
  },
}

export const CardGrid = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-3">
      <GlassCard title="Performance" description="Real-time metrics and monitoring for all services." />
      <GlassCard title="Security" description="End-to-end encryption and zero-trust architecture." />
      <GlassCard title="Scalability" description="Auto-scaling infrastructure with global CDN." />
    </div>
  ),
}
