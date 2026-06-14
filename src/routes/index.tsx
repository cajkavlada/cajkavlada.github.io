import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-6">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-100">
        vcajka.dev
      </h1>
      <p className="mt-4 text-zinc-400 text-lg">Coming soon.</p>
    </main>
  )
}
