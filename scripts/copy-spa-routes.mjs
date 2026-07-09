import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = new URL('../dist/', import.meta.url)
const routes = ['login', 'security', 'contact']

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir.pathname, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(join(distDir.pathname, 'index.html'), join(routeDir, 'index.html'))
  }),
)
