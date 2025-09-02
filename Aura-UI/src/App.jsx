import { useState, useRef } from 'react'
import GlassCard from './components/GlassCard'
import CinematicButton from './components/CinematicButton'
import A11yToggle from './components/A11yToggle'
import FloatingInput from './components/FloatingInput'
import DataWidget from './components/DataWidget'

function App() {
  const [videoPaused, setVideoPaused] = useState(false)
  const videoRef = useRef(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPaused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
      setVideoPaused(!videoPaused)
    }
  }

  return (
    <div className="relative min-h-screen">
      <video
        ref={videoRef}
        className={`video-background ${videoPaused ? 'paused' : ''}`}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden={videoPaused}
        data-testid="bg-video"
      >
        <source src="/mp4asset.mp4" type="video/mp4" />
      </video>

      <A11yToggle paused={videoPaused} onToggle={toggleVideo} />

      <main className="relative z-10 min-h-screen p-6 md:p-12 bg-aura-dark/40">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-aura-accent to-aura-glow bg-clip-text text-transparent">
            Aura UI
          </h1>
          <p className="mt-3 text-lg text-aura-muted">
            Cinematic components for immersive experiences
          </p>
        </header>

        <div className="mx-auto max-w-6xl space-y-8">
          <section aria-labelledby="component-grid-heading">
            <h2 id="component-grid-heading" className="sr-only">Components</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <GlassCard title="Glass Card" description="Frosted glass panel with backdrop blur and subtle border glow." />
              <GlassCard title="Cinematic UI" description="Every component is built with accessibility and motion in mind." />
              <GlassCard title="Data Widget" description="Live data display with glassmorphism styling." />
            </div>
          </section>

          <section aria-labelledby="controls-heading" className="space-y-6">
            <h2 id="controls-heading" className="text-2xl font-semibold text-white">Interactive Controls</h2>
            <div className="flex flex-wrap gap-4">
              <CinematicButton onClick={() => alert('Primary action')} variant="primary">
                Primary Action
              </CinematicButton>
              <CinematicButton onClick={() => alert('Secondary action')} variant="secondary">
                Secondary Action
              </CinematicButton>
              <CinematicButton onClick={() => alert('Ghost action')} variant="ghost">
                Ghost Action
              </CinematicButton>
            </div>
          </section>

          <section aria-labelledby="inputs-heading" className="space-y-6">
            <h2 id="inputs-heading" className="text-2xl font-semibold text-white">Inputs</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingInput label="Username" id="username" name="username" autoComplete="username" />
              <FloatingInput label="Email" id="email" name="email" type="email" autoComplete="email" />
            </div>
          </section>

          <section aria-labelledby="data-heading" className="space-y-6">
            <h2 id="data-heading" className="text-2xl font-semibold text-white">Data Overview</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <DataWidget label="Active Users" value="12,847" trend="up" />
              <DataWidget label="Response Time" value="42ms" trend="down" />
              <DataWidget label="Uptime" value="99.97%" trend="up" />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
