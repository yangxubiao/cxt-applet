// app.js
App({
  onLaunch: function() {
    // //初始化加载，先判断用户登录状态
    // if (wx.getStorageSync('user')) {
    //     wx.switchTab({
    //         url: '/admin/pages/index/index'
    //     })
    // } else {
    //     wx.reLaunch({
    //         url: '/pages/login/index'
    //     })
    // }
      wx.switchTab({
          url: '/pages/home/index'
      })
  },
  globalData: {
    userInfo: null
  }
})
