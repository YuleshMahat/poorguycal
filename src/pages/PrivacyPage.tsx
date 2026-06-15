import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import policySource from '../../PrivacyPolicy.md?raw'

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 border-b border-pgc-border pb-2 text-xl font-semibold text-emerald-300 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-zinc-200">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-relaxed text-zinc-400 first:mt-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-400">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-200">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-sm text-zinc-500 not-italic">{children}</em>
  ),
  a: ({ href, children, ...rest }) => {
    if (href?.startsWith('/')) {
      return (
        <Link
          to={href}
          className="font-medium text-emerald-400 underline-offset-2 hover:underline"
          {...rest}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="font-medium text-emerald-400 underline-offset-2 hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  },
}

export function PrivacyPage() {
  return (
    <div className="space-y-8">
      <p className="text-center text-sm sm:text-left">
        <Link
          to="/"
          className="font-medium text-emerald-400/90 underline-offset-2 hover:text-emerald-300 hover:underline"
        >
          ← Back to support
        </Link>
      </p>

      <article className="rounded-2xl border border-pgc-border bg-pgc-surface/80 p-6 shadow-xl shadow-black/40 backdrop-blur-sm sm:p-10">
        <ReactMarkdown components={markdownComponents}>{policySource}</ReactMarkdown>
      </article>
    </div>
  )
}
