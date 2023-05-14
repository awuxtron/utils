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
 * Ensure the given string is always start with the given prefix.
 *
 * @category String
 */
export function ensurePrefix<P extends string>(str: string, prefix: P) {
    return (!str.startsWith(prefix) ? prefix + str : str) as `${P}${string}`
}

/**
 * Ensure the given string is always end by the given suffix.
 *
 * @category String
 */
export function ensureSuffix<P extends string>(str: string, suffix: P) {
    return (!str.endsWith(suffix) ? str + suffix : str) as `${P}${string}`
}
