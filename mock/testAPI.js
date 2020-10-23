const Mock = require("mockjs");

module.exports = [ //接口数组，每个元素对应一个接口
  // 接口1
  {
    url: "testAppList",
    type: "post",
    response: (config) => {
      return Mock.mock({
        success: "success",
        code: "0",
        msg: "",
        "data|1-5": [
          {
            name: "Lucy",
            age: 20,
            sex: 'woman'
          }
        ],
      });
    },
  },
  // 接口2
  {
    url: "testAppList2",
    type: "post",
    response: (config) => {
      return Mock.mock({
        success: "success",
        code: "0",
        msg: "",
        "data|1-3": [
          {
            name: "Lilei",
            age: 21,
            sex: 'man'
          }
        ],
      });
    },
  },
];
