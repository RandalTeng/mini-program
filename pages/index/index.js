//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchData: {
      focus: false,
      value: '',
    },
    currentCate: 0,
    categoryList: [
      {id: 0, name: '最新0'},
      {id: 1, name: '最新1'},
      {id: 2, name: '最新2'},
      {id: 3, name: '最新3'},
      {id: 4, name: '最新4'},
      {id: 5, name: '最新5'},
      {id: 6, name: '最新6'},
      {id: 7, name: '最新7'},
    ],
    contentList: [
      {
        no: '00002149',
        title: '[标题]标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题49',
        created_at: '2019-03-28',
        views: 10,
        can_share:1,
        sub_pics: [
          {id: 1, src: '../../images/1.jpg'},
          {id: 2, src: '../../images/2.jpg'},
          {id: 3, src: '../../images/3.jpg'},
          {id: 4, src: '../../images/4.jpg'},
        ],
      },
      {
        no: '00002150',
        title: '[标题]标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题50',
        created_at: '2019-03-29',
        views: 11,
        can_share:1,
        sub_pics: [
          {id: 1, src: '../../images/1.jpg'},
          {id: 2, src: '../../images/2.jpg'},
          {id: 3, src: '../../images/3.jpg'},
          {id: 4, src: '../../images/4.jpg'},
        ]
      },
      {
        no: '00002151',
        title: '[标题]标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题51',
        created_at: '2019-03-30',
        views: 12,
        can_share:1,
        sub_pics: [
          {id: 1, src: '../../images/1.jpg'},
          {id: 2, src: '../../images/2.jpg'},
          {id: 3, src: '../../images/3.jpg'},
          {id: 4, src: '../../images/4.jpg'},
        ]
      },
      {
        no: '00002152',
        title: '[标题]标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题52',
        created_at: '2019-04-01',
        views: 13,
        can_share:1,
        sub_pics: [
          {id: 1, src: '../../images/1.jpg'},
          {id: 2, src: '../../images/2.jpg'},
          {id: 3, src: '../../images/3.jpg'},
          {id: 4, src: '../../images/4.jpg'},
        ]
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },

  searchFocus: function () {
    this.setData({'searchData.focus': true});
  },
  searchBlur: function () {
    this.setData({'searchData.focus': false});
  },
  searchInput: function (event) {
    this.setData({'searchData.value': event.detail.value})
  },
  searchRequest: function (event) {
    this.setData({'searchData.value': ''})
  },
  selectCate: function (event) {
    let cid = event.target.dataset.cid
    this.setData({currentCate: cid})
  }
})
