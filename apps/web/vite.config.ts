import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { nitro } from 'nitro/vite'

// Vercel sets VERCEL=1 during builds; everywhere else (local dev, Cloudflare's
// `wrangler deploy` build) targets Cloudflare Workers via wrangler.jsonc.
const deployPlugin = process.env.VERCEL
  ? nitro({ preset: 'vercel' })
  : cloudflare({ viteEnvironment: { name: 'ssr' } })

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), deployPlugin, tailwindcss(), tanstackStart(), viteReact()],
})

export default config
