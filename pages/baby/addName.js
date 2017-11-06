// pages/baby/addName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.userName != "" && options.userName !="请输入姓名"){
      this.setData({
        userName: options.userName
      }) 
    } 
  },
  bindNameInput:function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  bindName: function (){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      userName: this.data.userName
    })
    wx.navigateBack({
      delta:1
    })
  }
})