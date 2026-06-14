import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans">
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="border-t border-zinc-800 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} Vladimír Čajka</span>
          <Link to="/legal" className="hover:text-zinc-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  ),
})
