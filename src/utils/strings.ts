// Get a better look at this, probably better to only avoid numbers
export const isValidWord = (input: string): boolean => !!input.match(/^[a-z|A-Z]+\s*[a-z|A-Z]+$/g)
