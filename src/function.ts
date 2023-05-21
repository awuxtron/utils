export type Fn = (...args: any) => any

/**
 * Pass the value through the callback, and return the value.
 *
 * @category Function
 */
export function tap<T>(value: T, callback: (value: T) => void): T {
    callback(value)
    return value
}
