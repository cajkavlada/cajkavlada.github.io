import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Vladimír Čajka</strong>
        <br />
        Last updated: 2026-06-14
      </p>

      <p>
        This policy applies to the Facebook integration app used to display
        Facebook page posts on client websites.
      </p>

      <h2>Data we access</h2>
      <ul>
        <li>Facebook page posts and media via the Graph API</li>
        <li>Facebook page metadata (page name, URL)</li>
        <li>Page access tokens</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>Posts are stored in our database and displayed on the client's website</li>
        <li>Tokens are stored securely and used only to fetch page content</li>
      </ul>

      <h2>Data retention</h2>
      <ul>
        <li>Post data is kept while the client's website is active</li>
        <li>Tokens are deleted upon request</li>
      </ul>

      <h2>Data deletion</h2>
      <p>
        To request deletion of your data, contact us at{' '}
        <a href="mailto:cajkavlada@gmail.com">cajkavlada@gmail.com</a>.
        We will remove all stored tokens and page data within 30 days.
      </p>
      <p>
        See also:{' '}
        <a href="/legal/data-deletion">Data Deletion Instructions</a>
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:cajkavlada@gmail.com">cajkavlada@gmail.com</a>
      </p>
    </main>
  )
}
