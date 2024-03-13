/**
 * 实现函数柯里化
 * @param fn
 * @param args
 * @returns
 */
export function curry(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args) // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    : /**
       * 传入的参数小于原始函数fn的参数个数时
       * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
       */
      (..._args) => curry(fn, ...args, ..._args);
}
