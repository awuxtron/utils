import { ensurePrefix, stripPrefix } from './string'

export type Hex = `0x${string}`

export function isHexString(value: any): value is string {
    return typeof value === 'string' && /^(?:0x)?[0-9a-f]+$/iu.test(value)
}

export function isStrictHexString(value: any): value is Hex {
    return typeof value === 'string' && /^0x[0-9a-f]+$/iu.test(value)
}

export function stripHexPrefix(value: string | Hex): string {
    return stripPrefix(value, '0x')
}

export function ensureHexPrefix(value: string | Hex): Hex {
    return <Hex>ensurePrefix(value, '0x')
}
