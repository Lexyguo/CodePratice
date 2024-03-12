/**
 * 模板字符串解析
 * @param {*} templateString
 * @param {*} data
 * @returns 解析后的字符串
 */
export function parseTemplateString(templateString, data) {
  // 使用正则表达式在模板字符串中查找所有 ${...} 的实例
  const regex = /\$\{(.*?)\}/g;
  // 使用 replace() 方法将每个 ${...} 的实例替换为数据对象中相应的值
  const parsedString = templateString.replace(regex, (match, key) => {
    // 使用 eval() 函数来评估 ${...} 中的表达式，并从数据对象中返回相应的值
    return eval(`data.${key}`);
  });
  return parsedString;
}
