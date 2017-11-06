// pages/baby/addBaby.js
var util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultBabyImage:"../../images/icon/default-baby.png",
    defaultRightIcon:"../../images/icon/right-icon.png",
    defaultNameIcon:"../../images/icon/name-icon.png",
    defaultSexIcon: "../../images/icon/sex-icon.png",
    defaultBirthdayIcon: "../../images/icon/birthday-icon.png",
    defaultRelationIcon: "../../images/icon/relation-icon.png",
    userName:"请输入姓名",
    sex:"",
    sexArray:['男','女'],
    sexIndex:0,
    birthday:"请选择生日",
    relation:"请选择关系",
    relationArray:['爸爸','妈妈'],
    relationIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindHeaderImage:function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          defaultBabyImage: tempFilePaths
        });
      }
    })
  },
  bindName:function(){
    wx.navigateTo({
      url: 'addName?userName='+this.data.userName,
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      sex:e.detail.value,
      sexIndex: e.detail.value
    })
  },
  bindDateChange:function(e){
    this.setData({
      birthday: e.detail.value
    })
  },
  bindRelationChange:function(e){
    this.setData({
      relation:e.detail.value,
      relationIndex:e.detail.value
    })
  },
  bindBack:function(){
    var data={
      userName:this.data.userName,
      defaultBabyImage: this.data.defaultBabyImage,
      sex: this.data.sex,
      birthday: this.data.birthday,
      relation: this.data.relation
    };
    util.storageSave("babyInfo",data);
    wx.navigateBack({
      delta:1
    })
  }
})