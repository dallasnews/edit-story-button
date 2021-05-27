/**
 * Escapes any special regular expression characters in the string
 *
 * For example, this string:
 * "dmn.arcpublishing.com" becomes
 * "dmn\\.arcpublishing.com"
 *
 * @see https://stackoverflow.com/a/3561711
 */
export const escapeRegexChars = (literal: string): string =>
  literal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

/**
 * Returns the first non-empty String in the given Array,
 * or null if none are found
 */
export const firstNonEmptyString = (
  items: Array<string | null>
): string | null => items.find((item) => item) || null

export const parseJSON = (jsonString: string): object | null => {
  let data: object | null

  try {
    data = JSON.parse(jsonString)
  } catch (e) {
    data = null
  }

  return data
}
