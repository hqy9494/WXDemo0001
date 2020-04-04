// pages/main/main.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      { key: 'lili', value: 'LILI' },
      { key: 'lala', value: 'LALA' },
      { key: 'lele', value: 'LELE' },
      { key: 'lulu', value: 'LULU' },
    ],
    result:123,
  },

  showText: function (e) {
    console.log(e.target.dataset['value'])
  },
  getScancode: function () {
    var _this = this;

    wx.scanCode({
      success: (res) => {
        var result = res.result;
        _this.setData({
          result: result,

        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
   
  }
})
