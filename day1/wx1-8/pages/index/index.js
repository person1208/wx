Page({
  data:{
    arr:[],
    now:'辅助'
  },
  onReady(){
  wx.request({
    url: 'http://www.aiqianduan.com:56506/wzry',
    success:(data)=>{
      console.log(data.data);
      
      this.setData({
        arr:data.data
      })      
    }
  })
  },
  check(e){
    console.log(e.detail.value);
    this.setData({
      now:e.detail.value
    })
    
  }
})