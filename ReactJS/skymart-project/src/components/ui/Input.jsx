export default function Input({
  label,
  icon: Icon,
  rightSlot,
  className = '',
  error,
  ...props
}) {
  return (
    <label className={`block ${className}`}>
      {label ? (
        <span className="mb-1.5 block text-sm font-medium text-[var(--text-muted)]">
          {label}
        </span>
      ) : null}
      <span className="relative flex items-center">
        {Icon ? (
          <Icon
            size={18}
            className="pointer-events-none absolute left-3.5 text-[var(--text-muted)]"
          />
        ) : null}
        <input
          className={`w-full rounded-xl border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-accent ${
            Icon ? 'pl-11' : ''
          } ${rightSlot ? 'pr-11' : ''}`}
          {...props}
        />
        {rightSlot ? (
          <span className="absolute right-3.5 flex items-center">
            {rightSlot}
          </span>
        ) : null}
      </span>
      {error ? (
        <span className="mt-1.5 block text-xs text-red-500">{error}</span>
      ) : null}
    </label>
  )
}
