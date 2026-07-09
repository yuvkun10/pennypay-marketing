import { Button } from '@pennypay/ui'

export function ContactPage() {
  return (
    <main className="content-page">
      <section className="content-hero">
        <h1>Contact</h1>
        <p>Need help finding the right workspace or preparing a new care-provider portal? Contact the PennyPay team.</p>
        <div className="hero-actions content-actions">
          <Button as="a" href="mailto:support@dulciepay.com.au" size="lg">
            Email support
          </Button>
          <Button as="a" href="/login" variant="outline" size="lg">
            Choose workspace
          </Button>
        </div>
      </section>
      <section className="support-panel" aria-label="Support guidance">
        <h2>Workspace support</h2>
        <p>For workspace access or role permissions, use your organisation's native portal and support process.</p>
      </section>
    </main>
  )
}
