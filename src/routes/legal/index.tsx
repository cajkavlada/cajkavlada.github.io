import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10 inline-block"
      >
        ← Back
      </Link>

      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Privacy Policy</h1>
      <p className="text-sm text-zinc-500 mb-10">
        Vladimír Čajka &mdash; Last updated: 2026-06-14
      </p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <p>
            This policy applies to the Facebook integration app used to display
            Facebook page posts on client websites. It governs data related to
            Facebook{' '}
            <strong className="text-zinc-100">business page owners</strong>{' '}
            (clients) who connect their page to the app — not the visitors of
            those websites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">
            Data we access
          </h2>
          <ul className="space-y-1 list-disc list-inside text-zinc-400">
            <li>Facebook page posts and media via the Graph API</li>
            <li>Facebook page metadata (page name, URL)</li>
            <li>Page access tokens</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">
            How we use it
          </h2>
          <ul className="space-y-1 list-disc list-inside text-zinc-400">
            <li>Posts are stored in our database and displayed on the client's website</li>
            <li>Tokens are used solely to fetch page content on behalf of the client</li>
            <li>
              Data is never used for advertising, analytics, or any purpose
              beyond operating the widget
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">
            Third-party sharing
          </h2>
          <p className="text-zinc-400">
            We do not sell, rent, or share your data with any third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">Security</h2>
          <p className="text-zinc-400">
            Access tokens are stored encrypted and are never exposed publicly.
            Access is restricted to the systems required to operate the widget.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">
            Data retention
          </h2>
          <ul className="space-y-1 list-disc list-inside text-zinc-400">
            <li>Post data is kept while the client's website is active</li>
            <li>Tokens are deleted upon request or when the client disconnects</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">
            Data deletion
          </h2>
          <p className="text-zinc-400">
            To request deletion of your data, contact us at{' '}
            <a
              href="mailto:cajkavlada@gmail.com"
              className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors"
            >
              cajkavlada@gmail.com
            </a>
            . We will remove all stored tokens and page data within 30 days.
          </p>
          <p className="text-zinc-400 mt-2">
            See also:{' '}
            <Link
              to="/legal/data-deletion"
              className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors"
            >
              Data Deletion Instructions
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-100 mb-3">Contact</h2>
          <p className="text-zinc-400">
            <a
              href="mailto:cajkavlada@gmail.com"
              className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors"
            >
              cajkavlada@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
