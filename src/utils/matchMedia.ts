// Need to fallback to support older browsers (mainly, Safari < 14).
// See: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#browser_compatibility

export function addMediaQueryListener(mediaQuery: MediaQueryList, listener: (event: MediaQueryListEvent) => void) {
  try {
    mediaQuery.addEventListener('change', listener) // eslint-disable-line no-restricted-syntax
  } catch (e) {
    mediaQuery.addListener(listener) // eslint-disable-line no-restricted-syntax
  }
}

export function removeMediaQueryListener(mediaQuery: MediaQueryList, listener: (event: MediaQueryListEvent) => void) {
  try {
    mediaQuery.removeEventListener('change', listener) // eslint-disable-line no-restricted-syntax
  } catch (e) {
    mediaQuery.removeListener(listener) // eslint-disable-line no-restricted-syntax
  }
}
