import { Fn } from './function'

export enum Duration {
    /**
     * A millisecond.
     */
    Millisecond = 1,

    /**
     * A second, in milliseconds.
     */
    Second = 1000, // Millisecond * 1000

    /**
     * A minute, in milliseconds.
     */
    Minute = 60_000, // Second * 60

    /**
     * An hour, in milliseconds.
     */
    Hour = 3_600_000, // Minute * 60

    /**
     * A day, in milliseconds.
     */
    Day = 86_400_000, // Hour * 24

    /**
     * A week, in milliseconds.
     */
    Week = 604_800_000, // Day * 7

    /**
     * A year, in milliseconds.
     */
    Year = 31_536_000_000, // Day * 365
}

/**
 * Delays the program execution for the given number of milliseconds.
 *
 * @category Time
 */
export const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Returns the given date as a UNIX timestamp in seconds.
 *
 * @category Time
 */
export const toUnixTimestamp = (date: Date) => Math.floor(date.getTime() / 1000)

/**
 * Returns the current UNIX timestamp in seconds.
 *
 * @category Time
 */
export const timestamp = () => toUnixTimestamp(new Date())

export const inMilliseconds = (value: number, duration: Duration) => value * duration

export function countdown(date: Date, onEnd?: Fn, template: string = '{{d}}d {{h}}h {{m}}m {{s}}s'): string {
    const now = Date.now()
    const distance = date.getTime() - now

    if (distance <= 0 && onEnd) {
        onEnd()
    }

    const days = Math.floor(distance / Duration.Day)
    const hours = Math.floor((distance % Duration.Day) / Duration.Hour)
    const minutes = Math.floor((distance % Duration.Hour) / Duration.Minute)
    const seconds = Math.floor((distance % Duration.Minute) / Duration.Second)

    return template
      .replace('{{d}}', String(days))
      .replace('{{h}}', String(hours))
      .replace('{{m}}', String(minutes))
      .replace('{{s}}', String(seconds))
}
