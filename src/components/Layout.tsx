import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
      : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200',
  ].join(' ')

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-pgc-border bg-pgc-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
          <NavLink
            to="/"
            className="group flex items-center gap-2 font-semibold tracking-tight text-zinc-100"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-700 text-sm text-pgc-bg shadow-lg shadow-emerald-500/20">
              PG
            </span>
            <span className="hidden sm:inline">
              PoorGuy Cal
              <span className="block text-xs font-normal text-zinc-500 group-hover:text-zinc-400">
                Support
              </span>
            </span>
          </NavLink>

          <nav className="flex items-center gap-1" aria-label="Main">
            <NavLink to="/" className={navLinkClass} end>
              Support
            </NavLink>
            <NavLink to="/privacy" className={navLinkClass}>
              Privacy
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <Outlet />
      </main>

      <footer className="border-t border-pgc-border py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} PoorGuy Cal
      </footer>
    </div>
  )
}
