function GlassCard({ title, description, children }) {
  return (
    <article
      className="glass rounded-2xl p-6 glass-hover"
      tabIndex={0}
      aria-label={title}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-sm text-aura-muted leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </article>
  )
}

export default GlassCard
