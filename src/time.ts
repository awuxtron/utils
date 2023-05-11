/**
 * Delays the program execution for the given number of milliseconds.
 *
 * @category Time
 */
export const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Returns the current UNIX timestamp in seconds.
 *
 * @category Time
 */
export const timestamp = () => Math.floor(Date.now() / 1000)
