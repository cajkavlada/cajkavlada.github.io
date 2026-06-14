import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/data-deletion')({
  component: DataDeletion,
})

function DataDeletion() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/legal"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10 inline-block"
      >
        ← Privacy Policy
      </Link>

      <h1 className="text-3xl font-bold text-zinc-100 mb-10">
        Data Deletion Instructions
      </h1>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <p>To request deletion of your Facebook data from our app:</p>

          <ol className="mt-4 space-y-3 list-decimal list-inside text-zinc-400">
            <li>
              Send an email to{' '}
              <a
                href="mailto:cajkavlada@gmail.com"
                className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors"
              >
                cajkavlada@gmail.com
              </a>{' '}
              with subject{' '}
              <strong className="text-zinc-100">
                "Facebook Data Deletion Request"
              </strong>
            </li>
            <li>Include your Facebook Page name or ID</li>
            <li>We will confirm deletion within 30 days</li>
          </ol>
        </section>

        <section className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-400">
            Alternatively, revoking the app's access on Facebook (Settings
            &rarr; Security and Login &rarr; Apps and Websites) removes our
            ability to access new data. Contact us to delete already stored
            data.
          </p>
        </section>
      </div>
    </main>
  )
}
