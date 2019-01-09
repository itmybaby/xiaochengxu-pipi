import {
  classicBeh
} from "../classic-beh.js"

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: "images/player@pause.png",
    playSrc: "images/player@playing.png"
  },

  lifetimes: {
    attached() {
      //wx:if
      this._recoverStatus()
      this._monitorSwitch()
    },
    detached() {
      // mMgr.stop
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event) {
      if (!this.properties.playing) {
        this.setData({
          playing: true
        })
        mMgr.title = this.properties.title
         // mMgr.src = "http://m3.13400.com:9888/20181222/GeBiTaiShan%20ALiLang.mp3"
        mMgr.src = this.properties.src
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },
    _recoverStatus: function() {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorSwitch() {
      mMgr.onPlay(() => {
        this._recoverStatus();
      })
      mMgr.onPause(() => {
        this._recoverStatus();
      })
      mMgr.onStop(() => {
        this._recoverStatus();
      })
      mMgr.onEnded(() => {
        this._recoverStatus();
      })
    }
  }

})