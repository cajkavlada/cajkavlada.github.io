import { cpSync, mkdirSync } from 'fs'

const routes = ['legal', 'legal/data-deletion']

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  cpSync('dist/index.html', `dist/${route}/index.html`)
}
