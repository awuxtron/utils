/**
 * Chunk the array into chunks of the given size.
 *
 * @category Array
 */
export function chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = []

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result
}

/**
 * Return a new array contains only elements appear on all specified arrays.
 *
 * @category Array
 */
export function common<T>(...arrays: T[][]): T[] {
    return arrays.reduce((r, v) => r.filter((i) => v.includes(i)))
}

/**
 * Return only unique items from the array.
 *
 * @category Array
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)]
}

/**
 * If the given value is not an array and not null, wrap it in one.
 *
 * @category Array
 */
export function wrap<T>(array: T | T[]): T[] {
    return Array.isArray(array) ? array : [array]
}
