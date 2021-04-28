var app=getApp()
Page({
  data:{
    timing:""
  },

  onLoad: function (options) {
    
  },
  

  OneNet_Post:function(){
        var that=this
        let deviceid = "711497460"
        let apikey = "KtNVE1z1pvdVVP7JZ1bWP=xC=gE="
        let data={
          "datastreams": [
            {"id": "state","datapoints":[{"value": 0}]},
            {"id": "check","datapoints":[{"value": 1}]},
          ]
        }
        wx.request({
          url: "http://api.heclouds.com/devices/711497460/datapoints",
          method:'POST',
          header:{
            "content-type": 'application/json',
            "api-key": "KtNVE1z1pvdVVP7JZ1bWP=xC=gE="
          },
          data:JSON.stringify(data),
          success(res){
            console.log("更新数据成功",res)
          },
          fail: function(res){
            wx.showToast({ title: '系统错误' })
          },
          complete:function(res){
            wx.hideLoading()
          }
        })
        wx.redirectTo({
          url: '../success/success'  //目的页面url 
      })
      app.globalData.timing == "1"
      console.log(app.globalData.timing)
      },
  
    })