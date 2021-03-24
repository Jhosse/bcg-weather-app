export const setKeyInLocalStorage = (key: string, value: string) => localStorage.setItem(key, value)

export const getKeyInLocalStorage = (key: string): string | null => localStorage.getItem(key)

export const removeKeyInLocalStorage = (key: string): void => localStorage.removeItem(key)
