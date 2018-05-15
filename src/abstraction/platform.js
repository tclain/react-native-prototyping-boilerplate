/**
 * if the __REACT_NATIVE__ global is set, then we are in a native environment
 * @returns {boolean}
 */
export const isReactNative = () => global.__REACT_NATIVE__ !== undefined;
