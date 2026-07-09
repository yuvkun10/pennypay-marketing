import { Button } from '@pennypay/ui'

export function MarketingHero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>PennyPay</h1>
        <p className="hero-lede">Secure invoice workspaces for Australian care providers.</p>
        <p className="hero-body">
          Finance and operations teams can review, approve, and track invoice work with clarity while each organisation keeps its own native sign-in.
        </p>
        <div className="hero-actions">
          <Button as="a" href="/login" size="lg">
            Choose workspace
          </Button>
          <Button as="a" href="/security" variant="outline" size="lg">
            Security posture
          </Button>
        </div>
      </div>
      <ProductPreview />
    </section>
  )
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Invoice workspace preview">
      <aside className="product-preview__rail" aria-hidden>
        <img src="/logo.png" alt="" />
        <span />
        <span />
        <span />
        <span />
      </aside>
      <div className="product-preview__table">
        <div className="product-preview__header">
          <h2>Invoices</h2>
          <span>To review</span>
        </div>
        <div className="invoice-row invoice-row--active">
          <span>INV-240716</span>
          <span>Brighton Support Services</span>
          <strong>To review</strong>
        </div>
        <div className="invoice-row">
          <span>INV-240715</span>
          <span>Coastal Nursing</span>
          <strong>Approved</strong>
        </div>
        <div className="invoice-row">
          <span>INV-240714</span>
          <span>Aged Care Catering</span>
          <strong>Paid</strong>
        </div>
      </div>
      <div className="product-preview__detail">
        <span className="status-pill">Ready for review</span>
        <h3>INV-240716</h3>
        <dl>
          <div>
            <dt>Supplier</dt>
            <dd>Brighton Support Services</dd>
          </div>
          <div>
            <dt>Total</dt>
            <dd>$4,250.00 AUD</dd>
          </div>
          <div>
            <dt>Due date</dt>
            <dd>30 Jul 2024</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
