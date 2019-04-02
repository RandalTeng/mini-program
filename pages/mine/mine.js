const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    isFollower: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    jsCode: '',
  },

  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({userInfo: app.globalData.userInfo})
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo
        this.setData({userInfo: res.userInfo})
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({userInfo: res.userInfo})
        }
      })
    }
  },

  onShareAppMessage(event) {
    return {
      title: 'title',
      page: 'current/page',
      imageUrl: 'https://pic.huke88.com/video/cover/2017-06-19/DEEB8088-40F6-EDE3-861B-0570A2682F7B.jpg!/fw/500/format/webp'
    }
  },

  saveUser: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({userInfo: e.detail.userInfo})
  },

  redirect: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.page,
    });
  },

  getLogin: function(e) {
    wx.login({
      success: (res) => {
        this.setData({jsCode: res.code})
      }
    })
  },

  bindPhone: function(event) {
    wx.request({
      url: 'http://dev-applet.huke88.com/user/bind-we-chat-phone',
      data: {
        js_code: this.data.jsCode,
        raw_data: event.detail.encryptedData,
        iv: event.detail.iv
      },
      header: {
        Authorization: 'Bearer-T9LdiqhBd7DeBR9pUG-G7XU_-DMdKb8I',
      },
      method: 'POST',
      dataType: 'json',
      success: (res) => {
        console.log(res)
      }
    })
  }
})
