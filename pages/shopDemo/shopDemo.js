// pages/shopDemo/shopDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/swiper01.jpg',
      '../images/swiper02.jpg',
      '../images/swiper03.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: null
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
    this.getProList();
  },
  toDetail: function (e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/shopDemo/detail/detail'
    })
  },
  getProList: function () {
    var self = this;
    self.setData({
      proList: [{ img: '../images/pro_01.jpg', title: 'test1', shortDesc: '简介1'},
                { img: '../images/pro_02.jpg', title: 'test2', shortDesc: '简介2' },
                { img: '../images/pro_03.jpg', title: 'test3', shortDesc: '简介3' }
               ],
    });
  }
 
})