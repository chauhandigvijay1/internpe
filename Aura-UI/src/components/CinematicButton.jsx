const variantStyles = {
  primary:
    'bg-aura-accent text-white hover:bg-aura-glow shadow-lg shadow-aura-accent/25',
  secondary:
    'glass text-aura-accent hover:text-white hover:bg-slate-800/60',
  ghost:
    'bg-transparent text-aura-muted hover:text-white hover:bg-white/5',
}

function CinematicButton({ children, onClick, variant = 'primary', disabled = false, type = 'button', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variantStyles[variant] || variantStyles.primary}`}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default CinematicButton
