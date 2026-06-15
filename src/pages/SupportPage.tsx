import type { ReactNode } from 'react'

const CONTACT_EMAIL = 'yuleshmahat2058@gmail.com'
const WEBSITE = 'https://www.yuleshmahat.com'

function ContactCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-pgc-border bg-pgc-surface/80 p-6 shadow-xl shadow-black/40 backdrop-blur-sm sm:p-8">
      <h2 className="text-lg font-semibold text-emerald-300">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export function SupportPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
          PoorGuy Cal
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Support
        </h1>
        <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:mx-0">
          For bugs, payments, licenses, or anything else about the app, use the
          options below. We will get back to you as soon as we can.
        </p>
      </header>

      <div className="grid gap-6">
        <ContactCard
          title="Bugs & general issues"
          description="If something is broken, confusing, or you have feedback about PoorGuy Cal, send a message here."
        >
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('PoorGuy Cal — bug / issue')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 transition hover:bg-emerald-500/20"
          >
            <span aria-hidden>✉</span>
            {CONTACT_EMAIL}
          </a>
        </ContactCard>

        <ContactCard
          title="Payments & licenses"
          description="Questions about purchases, subscriptions, or license recovery belong here too — same inbox, we will route it correctly."
        >
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('PoorGuy Cal — payment / license')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 transition hover:bg-emerald-500/20"
          >
            <span aria-hidden>✉</span>
            {CONTACT_EMAIL}
          </a>
        </ContactCard>

        <ContactCard
          title="Website contact form"
          description="Prefer a form? Visit the site below and send a message there instead."
        >
          <a
            href={WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-emerald-500/40 hover:text-emerald-200"
          >
            <span aria-hidden>↗</span>
            www.yuleshmahat.com
          </a>
        </ContactCard>
      </div>

      <p className="text-center text-base font-medium text-emerald-400/90 sm:text-left">
        Enjoy PoorGuy Cal and happy tracking.
      </p>
    </div>
  )
}
