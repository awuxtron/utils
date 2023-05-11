export type Numberish = string | number | bigint

export interface FormatOptions extends Intl.NumberFormatOptions {
    locales?: string | string[]
    groupFractionLeadingZeros?: boolean
    exactFractionWhenZero?: boolean
}

/**
 * Determines if the given input is a number.
 *
 * @category Number
 */
export function isNumber(input: any): input is Numberish {
    return ['number', 'bigint'].includes(typeof input) || /^([-+])?(\d+)(\.\d+)?$/.test(String(input))
}

/**
 * Wrapper of Intl.NumberFormat function with advanced features support.
 *
 * @category Number
 */
export function format(number: Numberish, options: FormatOptions = {}) {
    let { maximumFractionDigits = 4, groupFractionLeadingZeros = false, exactFractionWhenZero = true } = options
    let leadingZerosCount = 0

    const [integerPart, fractionPart = '0'] = String(number).split('.')

    if (BigInt(integerPart) == 0n && (groupFractionLeadingZeros || exactFractionWhenZero)) {
        maximumFractionDigits += leadingZerosCount = fractionPart.match(/^0+/)?.[0].length || 0

        if (!groupFractionLeadingZeros) {
            leadingZerosCount = 0
        }
    }

    const formatter = new Intl.NumberFormat(options.locales, { ...options, maximumFractionDigits })

    if (leadingZerosCount > 0) {
        const formatted = formatter.formatToParts(number as number).map((part) => {
            if (part.type == 'fraction') {
                part.value = `0{${leadingZerosCount}}` + part.value.substring(leadingZerosCount)
            }

            return part.value
        })

        return formatted.join('')
    }

    return formatter.format(number as number)
}
