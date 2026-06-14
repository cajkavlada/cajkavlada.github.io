import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/data-deletion')({
  component: DataDeletion,
})

function DataDeletion() {
  return (
    <main>
      <h1>Data Deletion Instructions</h1>

      <p>To request deletion of your Facebook data from our app:</p>

      <ol>
        <li>
          Send an email to <a href="mailto:cajkavlada@gmail.com">cajkavlada@gmail.com</a> with
          subject <strong>"Facebook Data Deletion Request"</strong>
        </li>
        <li>Include your Facebook Page name or ID</li>
        <li>We will confirm deletion within 30 days</li>
      </ol>

      <p>
        Alternatively, revoking the app's access on Facebook (Settings &rarr;
        Security and Login &rarr; Apps and Websites) removes our ability to
        access new data. Contact us to delete already stored data.
      </p>
    </main>
  )
}
