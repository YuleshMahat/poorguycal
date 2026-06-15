import { Link } from 'react-router-dom'

export function PrivacyPage() {
  return (
    <div className="space-y-6 text-center sm:text-left">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
          PoorGuy Cal
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Privacy policy
        </h1>
        <p className="text-base leading-relaxed text-zinc-400">
          The full privacy policy will be published here soon. If you need
          anything in the meantime, use the{' '}
          <Link
            to="/"
            className="font-medium text-emerald-400 underline-offset-2 hover:underline"
          >
            support
          </Link>{' '}
          page to reach out.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-pgc-border bg-pgc-surface/50 p-8 text-sm text-zinc-500">
        Content coming in a future update.
      </div>
    </div>
  )
}
