import type { Fn } from './function'
import { sleep } from './time'

let id: number = 0

/**
 * Generates a unique ID.
 *
 * @category Utility
 */
export const uniqueId = () => ++id

/**
 * Polls a function sequentially with a delay between each call.
 *
 * @category Utility
 */
export const poll = (fn: Fn, delay: number = 0) => {
    let active = true

    const stop = () => (active = false)

    const watch = async () => {
        if (!active) {
            return
        }

        await fn()
        await sleep(delay)
        await watch()
    }

    watch().catch((error) => {
        throw error
    })

    return stop
}
