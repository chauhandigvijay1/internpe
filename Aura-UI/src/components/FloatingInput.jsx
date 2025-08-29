import { useState } from 'react'

function FloatingInput({ label, id, name, type = 'text', autoComplete, ...props }) {
  const [value, setValue] = useState('')

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => setValue(e.target.value)}
        className="glass peer w-full rounded-xl px-4 pt-6 pb-2 text-sm text-white placeholder-transparent transition-all duration-300 focus-ring"
        placeholder={label}
        aria-label={label}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none
          ${value
            ? 'top-2 text-xs text-aura-accent'
            : 'top-4 text-sm text-aura-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-aura-accent'
          }`}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingInput
