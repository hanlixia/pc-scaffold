const Mock = require("mockjs");

const txtList = Mock.mock({
    success:"",
    code:"",
    msg:"",
    data: {
     added: [{
        text: "通用",
        imgs: "/static/img/title-img/avatar.png",
        id:0,
      },
      {
        text: "建档",
        imgs: "/static/img/title-img/avatar.png",
        id:1,
      },
      {
        text: "范德萨",
        imgs: "/static/img/title-img/avatar.png",
        id:2,
      },
      {
        text: "爱上它广泛",
        imgs: "/static/img/title-img/avatar.png",
        id:3,
      },
      {
        text: "阿斯蒂芬",
        imgs: "/static/img/title-img/avatar.png",
        id:4,
      },
      {
        text: "和就没看了",
        imgs: "/static/img/title-img/avatar.png",
        id:5,
      },
      {
        text: "7萨达",
        imgs: "/static/img/title-img/avatar.png",
        id:6,
      },
      {
        text: "范德萨发斯蒂芬",
        imgs: "/static/img/title-img/avatar.png",
        id:7,
      },
      {
        text: "胜多负少",
        imgs: "/static/img/title-img/avatar.png",
        id:8,
      }
    ,{
      text: "胜多负少",
      imgs: "/static/img/title-img/avatar.png",
      id:9,
    },
    {
      text: "阿斯蒂芬",
      imgs: "/static/img/title-img/avatar.png",
      id:10,
    },
    {
      text: "撒的发生的",
      imgs: "/static/img/title-img/avatar.png",
      id:11,
    }],
     categories: [
        {
            name: "全部",
          },
          {
            name: "办公",
          },
          {
            name: "智能管理",
          },
          {
            name: "主业业务",
          },
          {
            name: "员工服务",
          },
          {
            name: "数据",
          },
          {
            name: "知识管理",
          },
     ],
     apps: [{
       app_id: "163",
       name: "163士大夫电风扇的",
       description: "阿输入法撒旦法撒旦法撒旦法",
       avatar_url: "/photos/none_client",
       type:"办公",
       url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
     },
     {
        app_id: "163",
        name: "阿道夫",
        description: "第三个很反感",
        type:"办公",
        avatar_url: "/photos/none_client",
        url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
      },
      {
        app_id: "163",
        name: "福瑞迪",
        type:"智能管理",
        description: "巨化股份的",
        avatar_url: "/photos/none_client",
        url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
      },
      {
        app_id: "163",
        name: "为",
        description: "了快巨化股份的",
        type:"智能管理",
        avatar_url: "/photos/none_client",
        url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
      },
      {
        app_id: "163",
        name: "与他人",
        description: "阿斯顿发而梵蒂冈",
        type:"智能管理",
        avatar_url: "/photos/none_client",
        url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
      },
      {
        app_id: "萨达",
        name: "萨达",
        description: "今天还有反弹给对方",
        type:"数据",
        avatar_url: "/photos/none_client",
        url: "/genertec.com/apps/sso_redirect?app_id=163&url=http%3A%2F%2Fwww.163.com"
      }]
   }
  });
const cg = Mock.mock({
  msg:'成功'
})
const dg = Mock.mock({
  msg:'成功'
})
const list = Mock.mock(
  {
    code:0,
    data:{
      added: [
        4,12
      ],
      categories: [
        {
          id: 1,
          app_id: "__category_1",
          name: "test类别",
          description: "",
          network_id: 1,
          avatar_url: "/photos/none_category",
          display_order: 0,
          apps: [
            4,
            12
          ],
          bundled_install: false,
          depth: 0
        }
      ],
      apps: [
        {
          id: 4,
          intranet_enable: true,
          internet_enable: true,
          hidden: false,
          app_id: "wy",
          name: "网易",
          description: "",
          type: 2,
          is_default_install: false,
          disable: false,
          show_in_flipper: 0,
          network_id: 2,
          avatar_url: "/photos/none_client",
          url: "/genertec.com/apps/sso_redirect?app_id=wy&url=http%3A%2F%2Fwww.163.com",
          display_order: 0,
          categories: [
            1
          ],
          max_version_size: null,
          max_version_fingerprint: null,
          auth_enable: false,
          installed: true,
          comments: {
            items: [],
            meta: {
              average_star: "5.0",
              deletable: false
            }
          },
          store_info: {
            id: 2,
            brief: "aaa ",
            developer_name: "",
            app_id: "wy",
            numeric_file_size: null,
            file_size: null
          },
          screenshots: [],
          show_in_my_service: true,
          show_in_my_workbench: true
        },
        {
          id: 12,
          intranet_enable: true,
          internet_enable: true,
          hidden: false,
          app_id: "663",
          name: "阿斯蒂芬",
          description: "啊【第三方年时间里大反派热偶in打开吗你放屁认识的努力克服",
          type: 2,
          is_default_install: false,
          disable: false,
          show_in_flipper: 0,
          network_id: 2,
          avatar_url: "/photos/none_client",
          url: "/genertec.com/apps/sso_redirect?app_id=663&url=www.baidu.com",
          display_order: 0,
          categories: [
            1
          ],
          max_version_size: null,
          max_version_fingerprint: null,
          auth_enable: false,
          installed: false,
          comments: {
            items: [],
            meta: {
              average_star: "5.0",
              deletable: false
            }
          },
          store_info: {
            id: 5,
            brief: "啦啦啦",
            developer_name: "啦啦啦啦",
            app_id: "663",
            numeric_file_size: null,
            file_size: null
          },
          screenshots: [
            {
              id: 36,
              image_file_name: "8f10db23e03ed08ce8418fbcc850de62.jpg",
              image_content_type: "",
              image_file_size: 6491726,
              image_fingerprint: "1a4c2429f57a22db389c7ec622d6c7a6",
              normal_url: "/photos/1a4c2429f57a22db389c7ec622d6c7a6",
              large_url: "/photos/1a4c2429f57a22db389c7ec622d6c7a6/large",
              original_url: "/photos/1a4c2429f57a22db389c7ec622d6c7a6/original",
              original_size: {
                width: 6582,
                height: 2400
              }
            },
            {
              id: 37,
              image_file_name: "a9821a5a96f5167f022c14d07d5843c1.jpg",
              image_content_type: "",
              image_file_size: 34417,
              image_fingerprint: "948f976c4b141972302136394f6225fd",
              normal_url: "/photos/948f976c4b141972302136394f6225fd",
              large_url: "/photos/948f976c4b141972302136394f6225fd/large",
              original_url: "/photos/948f976c4b141972302136394f6225fd/original",
              original_size: {
                width: 327,
                height: 368
              }
            },
            {
              id: 38,
              image_file_name: "e0b63e0c8d8f0aee4270049850226136.jpg",
              image_content_type: "",
              image_file_size: 271780,
              image_fingerprint: "22d3602f7c734017ebf318ce58db00b6",
              normal_url: "/photos/22d3602f7c734017ebf318ce58db00b6",
              large_url: "/photos/22d3602f7c734017ebf318ce58db00b6/large",
              original_url: "/photos/22d3602f7c734017ebf318ce58db00b6/original",
              original_size: {
                width: 1039,
                height: 661
              }
            }
          ],
          show_in_my_service: true,
          show_in_my_workbench: true
        }
      ]
    }
  }
)
module.exports = [
    {
      url: "findAppList",
      type: "post",
      response: config => {
        let data = {}
        switch (config.loginName) {
          case "houyl":
            data = list;
            break
          default:
            data = list;
            break;
        }
        return Mock.mock(data);
      }
    },
    {
      url: "setFrequently",
      type: "post",
      response: config => {
        let data = {}
        switch (config.loginName) {
          case "阿斯蒂芬":
            data = cg;
            break
          default:
            data = cg;
            break;
        }
        return Mock.mock(data);
      }
    }
  ];
