import { expect, test } from "vitest";
import { curry } from "./index";

test("函数柯里化实现一个add函数", () => {
  function addFunc(x, y, z) {
    return x + y + z;
  }
  const add = curry(addFunc);
  expect(add(1)(2)(3)).toBe(6);
  expect(add(1, 2)(3)).toBe(6);
  expect(add(1, 2, 3)).toBe(6);
  expect(add(1)(2, 3)).toBe(6);
});
