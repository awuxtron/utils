/**
 * Strip given characters from the beginning of a string.
 *
 * @category String
 */
export function ltrim(str: string, characters = ' \n\r\t\v') {
    let start = 0
    let end = str.length

    while (start < end && characters.indexOf(str[start]) >= 0) {
        ++start
    }

    return start > 0 ? str.substring(start, end) : str
}

/**
 * Strip given characters from the end of a string.
 *
 * @category String
 */
export function rtrim(str: string, characters = ' \n\r\t\v') {
    let end = str.length

    while (end > 0 && characters.indexOf(str[end - 1]) >= 0) {
        --end
    }

    return end < str.length ? str.substring(0, end) : str
}

/**
 * Strip given characters from the beginning and end of a string.
 *
 * @category String
 */
export function trim(str: string, characters = ' \n\r\t\v') {
    return ltrim(rtrim(str, characters), characters)
}

/**
 * Check if the given string is start with the given prefix.
 *
 * @category String
 */
export function hasPrefix(str: string, prefix: string) {
    return str.startsWith(prefix)
}

/**
 * Check if the given string is ends with the given suffix.
 *
 * @category String
 */
export function hasSuffix(str: string, suffix: string) {
    return str.endsWith(suffix)
}

/**
 * Ensure the given string is always start with the given prefix.
 *
 * @category String
 */
export function ensurePrefix(str: string, prefix: string) {
    return !hasPrefix(str, prefix) ? prefix + str : str
}

/**
 * Ensure the given string is always end by the given suffix.
 *
 * @category String
 */
export function ensureSuffix(str: string, suffix: string) {
    return !hasSuffix(str, suffix) ? str + suffix : str
}

/**
 * Strip the given prefix from the given string.
 *
 * @category String
 */
export function stripPrefix(str: string, prefix: string) {
    return hasPrefix(str, prefix) ? str.slice(prefix.length) : str
}

/**
 * Strip the given suffix from the given string.
 *
 * @category String
 */
export function stripSuffix(str: string, suffix: string) {
    return hasSuffix(str, suffix) ? str.slice(0, -suffix.length) : str
}

/**
 * Capitalize the first letter of the given string.
 *
 * @category String
 */
export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Chunk the given string into the given size.
 *
 * @category String
 */
export function chunkString(str: string, size: number): string[] {
    return str.split(new RegExp(`(.{${size}})`)).filter(Boolean)
}
