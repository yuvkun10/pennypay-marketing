import { BrandLockup, Button } from '@pennypay/ui'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
]

export function MarketingNav({ currentPath }: { currentPath: string }) {
  return (
    <header className="marketing-nav">
      <a href="/" className="marketing-nav__brand" aria-label="PennyPay home">
        <BrandLockup name="PennyPay" subtitle="" src="/logo.png" alt="PennyPay" />
      </a>
      <nav className="marketing-nav__links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} aria-current={currentPath === item.href ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button as="a" href="/login" size="sm" className="marketing-nav__login">
        Login
      </Button>
    </header>
  )
}
