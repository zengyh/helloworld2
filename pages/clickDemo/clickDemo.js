Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: "Hello World!"
  },

  clickMeEvent: function (e) {
    console.log(e);
    this.setData({
      msg: "Click Me!"
    });
  }

})