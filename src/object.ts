export type GenericObject = Record<PropertyKey, any>

export type FilterPredicate<O, K extends keyof O> = (key: K, value: O[K], index: number) => boolean

/**
 * Determines if the given input is an object.
 *
 * @category Object
 */
export function isObject(input: any): input is GenericObject {
    return input !== null && typeof input == 'object' && !Array.isArray(input)
}

/**
 * Determines whether an object has a property with the specified name.
 *
 * @category Object
 */
export function hasOwnProperty<T extends GenericObject>(object: T, name: PropertyKey): name is keyof T {
    if (!isObject(object)) {
        return false
    }

    return Object.prototype.hasOwnProperty.call(object, name)
}

/**
 * Strict typed `Object.entries`
 *
 * @category Object
 */
export function entries<O extends GenericObject>(object: O) {
    return Object.entries(object) as Array<[keyof O, O[keyof O]]>
}

/**
 * Returns the new object that meets the condition specified in a callback function.
 *
 * @category Object
 */
export function filter<O extends GenericObject>(object: O, predicate: FilterPredicate<O, keyof O>) {
    return Object.fromEntries(entries(object).filter(([key, value], index) => predicate(key, value, index)))
}

/**
 * Get the items with the specified keys.
 *
 * @category Object
 */
export function pick<O extends GenericObject, K extends keyof O>(object: O, ...keys: K[]) {
    return filter(object, (key) => keys.includes(key as K)) as Pick<O, K>
}

/**
 * Get all items except for those with the specified keys.
 *
 * @category Object
 */
export function omit<O extends GenericObject, K extends keyof O>(object: O, ...keys: K[]) {
    return filter(object, (key) => !keys.includes(key as K)) as Omit<O, K>
}

/**
 * Map key/value pairs for an object, and construct a new one.
 *
 * @category Object
 */
export function map<K extends PropertyKey, V, NK = K, NV = V>(object: Record<K, V>, fn: (k: K, v: V) => [NK, NV]) {
    return Object.fromEntries(entries(object).map(([k, v]) => fn(k, v))) as Record<K, V>
}
