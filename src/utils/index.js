/**
 * 公共方法文件
*/

// 去除字符串收尾空格
export const trimSpace = txt => {
  return (txt || "").replace(/^\s+|\s+$/g, "");
};
