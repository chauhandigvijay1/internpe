function A11yToggle({ paused, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onToggle}
        className="glass rounded-xl px-4 py-2 text-sm font-medium text-aura-muted hover:text-white transition-all duration-300 focus-ring flex items-center gap-2"
        aria-label={paused ? 'Resume background video' : 'Pause background video'}
        aria-pressed={paused}
        data-testid="a11y-toggle"
      >
        <span aria-hidden="true" className="text-base">
          {paused ? '▶' : '⏸'}
        </span>
        <span>{paused ? 'Resume Video' : 'Pause Video'}</span>
      </button>
    </div>
  )
}

export default A11yToggle
