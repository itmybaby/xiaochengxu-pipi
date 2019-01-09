// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    latest: Boolean,
    first: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: "images/navi@left@white.png",
    leftSrc: "images/navi@left@black.png",
    disRightSrc: "images/navi@right@white.png",
    rightSrc: "images/navi@right@black.png", 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function(event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight: function(event) {
      if (!this.properties.first) {

        this.triggerEvent('right', {}, {})
      }
    }
  }
})