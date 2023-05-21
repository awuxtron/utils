import { Fn } from './function'

export type Constructor<T = void> = new (...args: any[]) => T
export type MethodArgs<C, M extends keyof C> = C[M] extends Fn ? Parameters<C[M]> : unknown
