const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad: function () {
    this.loadmore()
  },
  loadmore: function() {
    //过长的list需要做二维数组，因为setData一次只能设置1024kb的数据量，如果过大的时候，就会报错
    //二维数组每次只设置其中一维，所以没有这个问题
    let nowList = `list[${this.data.list.length}]`
    let demoList = this.getList(10)
    this.setData({
      [nowList]: demoList
    })
  },
  /**
   * 每次吸入num条数据
   */
  getList(num) {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push({
        height: this.getRadomHeight()
      })
    }
    return list    
  },
  /**
   * 生成随机(100, 400)高度
   */
  getRadomHeight() {
    return parseInt(Math.random()*100 + 300)
  }
})
