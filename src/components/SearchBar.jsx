import { useEffect, useRef, useState } from 'react';

export function SearchBar({
  query,
  onQueryChange,
  onSearch,
  onLocate,
  suggestions,
  onSelect,
  onDismissSuggestions,
  disabled,
  hasError = false,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapRef.current?.contains(event.target)) {
        onDismissSuggestions?.();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [onDismissSuggestions]);

  function handleSubmit(event) {
    event.preventDefault();
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      onSelect(suggestions[activeIndex]);
      return;
    }
    onSearch(query);
  }

  function handleKeyDown(event) {
    if (!suggestions.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? suggestions.length - 1 : index - 1));
    } else if (event.key === 'Escape') {
      onDismissSuggestions?.();
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} ref={wrapRef}>
      <label className="sr-only" htmlFor="city-search">
        Search city
      </label>
      <div className="search-field">
        <span className="search-glyph" aria-hidden="true">
          ⌕
        </span>
        <input
          id="city-search"
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={suggestions.length > 0}
          aria-controls="city-suggestions"
          aria-invalid={hasError}
          value={query}
          onChange={(event) => {
            setActiveIndex(-1);
            onQueryChange(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search a city — Lisbon, Kyoto, Lagos..."
          autoComplete="off"
          disabled={disabled}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions" id="city-suggestions" role="listbox">
            {suggestions.map((item, index) => (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => onSelect(item)}
                >
                  <strong>{item.name}</strong>
                  <span>{[item.admin, item.country].filter(Boolean).join(', ')}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="btn primary" type="submit" disabled={disabled}>
        Forecast
      </button>
      <button
        className="btn ghost"
        type="button"
        onClick={onLocate}
        disabled={disabled}
      >
        Near me
      </button>
    </form>
  );
}
