import { MarketingHero } from '../components/MarketingHero'

export function HomePage() {
  return (
    <main>
      <MarketingHero />
      <section className="trust-section" aria-labelledby="trust-heading">
        <h2 id="trust-heading">Built for Australian care providers</h2>
        <div className="trust-grid">
          <article>
            <span className="trust-icon">✓</span>
            <h3>Secure by design</h3>
            <p>Workspace access remains isolated by organisation.</p>
          </article>
          <article>
            <span className="trust-icon">AU</span>
            <h3>Local operating model</h3>
            <p>Designed around Australian care finance workflows.</p>
          </article>
          <article>
            <span className="trust-icon">ID</span>
            <h3>Native workspace login</h3>
            <p>Each organisation keeps its own sign-in and role checks.</p>
          </article>
          <article>
            <span className="trust-icon">→</span>
            <h3>Clear entry path</h3>
            <p>One public selector, then direct handoff to the right portal.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
