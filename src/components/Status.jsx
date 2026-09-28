export function ErrorBanner({ message, onRetry }) {
  return (
    <div className="error-banner" role="alert" aria-live="assertive">
      <div>
        <p className="error-kicker">Signal lost</p>
        <p>{message}</p>
      </div>
      <button className="btn primary" type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

export function EmptyState({ message = 'No matching places found.' }) {
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <p>{message}</p>
    </div>
  );
}

export function LoadingState() {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="pulse-ring" />
      <p>Reading the sky…</p>
    </div>
  );
}
