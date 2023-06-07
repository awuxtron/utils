export function is<T>(value: any, isMatched: boolean): value is T {
    return isMatched
}

/**
 * Type guard to filter out null value.
 *
 * @category Guards
 */
export function notNull<T>(v: T): v is Exclude<T, null> {
    return v !== null
}

/**
 * Type guard to filter out undefined value.
 *
 * @category Guards
 */
export function notUndefined<T>(v: T): v is Exclude<T, undefined> {
    return v !== undefined
}

/**
 * Type guard to filter out null-ish value.
 *
 * @category Guards
 */
export function notNullish<T>(v: T): v is NonNullable<T> {
    return notNull(v) && notUndefined(v)
}
