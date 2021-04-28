Page({
 

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 
  /**
   * 扫码事件
   */
  scanCodeEvent: function(){
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,// 只允许从相机扫码
      success(res){
        console.log("扫码成功："+JSON.stringify(res))
 
        // 扫码成功后  在此处理接下来的逻辑
        that.setData({
          scanCode: res.result
        })
        
        wx.redirectTo({
          url: '../code/code'  //目的页面url
        })
      }
    })
    
  },
})