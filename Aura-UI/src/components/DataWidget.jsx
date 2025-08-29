const trendIcons = {
  up: '↑',
  down: '↓',
  neutral: '→',
}

const trendColors = {
  up: 'text-green-400',
  down: 'text-red-400',
  neutral: 'text-aura-muted',
}

function DataWidget({ label, value, trend = 'neutral' }) {
  return (
    <div
      className="glass rounded-2xl p-5 glass-hover"
      tabIndex={0}
      aria-label={`${label}: ${value}`}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-aura-muted">
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span
          className={`text-lg font-semibold ${trendColors[trend] || trendColors.neutral}`}
          aria-label={`trending ${trend}`}
        >
          {trendIcons[trend] || trendIcons.neutral}
        </span>
      </div>
    </div>
  )
}

export default DataWidget
