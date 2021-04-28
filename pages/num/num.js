Page({
  data: {
    code: ''
  },
  onLoad() {
    //进入页面就调用方法 创建一个随机验证码
    this.createCode()
  },
  
  
  //创建随机验证码方法
  createCode() {
    let code = ''; //初始化验证码
    let codeLength = 6; //设置验证码长度
    //设置随机字符
    let txt = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
    //循环
    for(let i = 0; i < codeLength; i++) {
      //设置随机数范围
      let index = Math.floor(Math.random() * 10);
      code += txt[index];
    }
    //动态设置数据
    this.setData({
      code
    })
  },
  })