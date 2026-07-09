export function SecurityPage() {
  return (
    <main className="content-page">
      <section className="content-hero">
        <h1>Security</h1>
        <p>
          PennyPay keeps public entry separate from workspace authentication. The selector does not authorize users, exchange sessions, or store privileged access material.
        </p>
      </section>
      <section className="policy-grid" aria-label="Security posture">
        <article>
          <h2>Workspace isolation</h2>
          <p>Dulcie and Hazel & Coastal continue to operate through their own workspace domains and native login screens.</p>
        </article>
        <article>
          <h2>No central sign-in</h2>
          <p>The public site never asks for private authentication details, invoice data, or support-only information.</p>
        </article>
        <article>
          <h2>Redirect-only entry</h2>
          <p>The login selector resolves a known workspace and redirects to that workspace login URL.</p>
        </article>
      </section>
    </main>
  )
}
