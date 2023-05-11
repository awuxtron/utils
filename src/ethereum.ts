export type Address = `0x${string}`

export const ERC20_SIGNATURES = [
    'dd62ed3e', // allowance
    '095ea7b3', // approve
    '70a08231', // balanceOf
    '313ce567', // decimals
    '06fdde03', // name
    '95d89b41', // symbol
    '18160ddd', // totalSupply
    'a9059cbb', // transfer
    '23b872dd', // transferFrom
    '8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925', // Approval event
    'ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', // Transfer event
]

/**
 * Determines if the given value is valid ethereum address.
 *
 * @category Ethereum
 */
export function isAddress(address: string): address is Address {
    return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Determines if the given addresses are the same address.
 *
 * @category Ethereum
 */
export function isSameAddress(...addresses: Address[]) {
    return addresses.slice(1).every((address) => address.toLowerCase() == addresses[0].toLowerCase())
}

/**
 * Determines if the given contract creation code must contain all the given signatures.
 *
 * @category Ethereum
 */
export function isContainSignatures(creationCode: string, signatures: string[]) {
    return signatures.every((s) => creationCode.includes(s))
}
