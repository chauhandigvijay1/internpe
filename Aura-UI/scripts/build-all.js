import { cpSync, rmSync } from 'fs'

// Step 1: Build the Vite app (already done via npm run build)
// Step 2: Build Storybook (already done via npm run build-storybook)
// Step 3: Copy storybook-static into dist/storybook

const storybookDir = 'storybook-static'
const targetDir = 'dist/storybook'

// Remove existing storybook dir in dist if present
try { rmSync(targetDir, { recursive: true, force: true }) } catch {}

// Copy fresh build
cpSync(storybookDir, targetDir, { recursive: true })

console.log('✓ Storybook copied to dist/storybook')
