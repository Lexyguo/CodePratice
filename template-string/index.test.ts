import { expect, test } from "vitest";
import { parseTemplateString } from "./index";

test("模版字符串解析", () => {
  const testStr =
    "我的名字是 ${name}，我今年 ${age} 岁，我从事 ${job} 的工作。";
  const data = { name: "lexy", age: 18, job: "FE" };
  expect(parseTemplateString(testStr, data)).toBe(
    "我的名字是 lexy，我今年 18 岁，我从事 FE 的工作。"
  );
});
