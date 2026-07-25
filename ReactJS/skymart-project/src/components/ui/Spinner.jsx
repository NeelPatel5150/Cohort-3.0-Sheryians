export default function Spinner({ className = '' }) {
  return (
    <div
      className={`mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-accent ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}
