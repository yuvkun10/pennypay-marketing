import { Footer } from './components/Footer'
import { MarketingNav } from './components/MarketingNav'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SecurityPage } from './pages/SecurityPage'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function CurrentPage({ path }: { path: string }) {
  switch (path) {
    case '/':
      return <HomePage />
    case '/login':
      return <LoginPage />
    case '/security':
      return <SecurityPage />
    case '/contact':
      return <ContactPage />
    default:
      return <HomePage />
  }
}

export function App() {
  const path = normalizePath(window.location.pathname)

  return (
    <div className="site-shell">
      <MarketingNav currentPath={path} />
      <CurrentPage path={path} />
      <Footer />
    </div>
  )
}
