//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  clickMe: function() {
    this.setData({
      motto: '我在风中凌乱'
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        console.log(this.data, 'bbbbbbbbb');
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res, '用户位置');
      }
    });
  },
  onShow: function() {},
  onReady: function() {},
  onPullDownRefresh: function() {
    console.log('下拉刷新');
  },
  onReachBottom: function() {
    console.log('触底');
  },
  onShareAppMessage: function() {
    console.log('点击分享');
  },
  onPageScroll: function() {
    console.log('滚动监听');
  },
  onResize: function() {
    console.log('响应触发');
  },
  onTabItemTap: function() {
    console.log('点击当前的tab');
  },
  getUserInfo: function(e) {
    console.log(e, 'cccc');
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
