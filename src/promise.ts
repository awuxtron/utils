/**
 * Creates a promise that can be resolved or rejected from outsides.
 *
 * @category Promise
 */
export function emptyPromise() {
    let resolve: (value?: any) => void = () => void 0
    let reject: (reason?: any) => void = () => void 0

    const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
    })

    return { resolve, reject, promise }
}
