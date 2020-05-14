let page=1;
Page({
  data:{
    wH:0,
    res:[],
    isShowDrawer:false,
    brand:'',
    
  },
  
  onReady(){
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            wH:res.windowHeight
          })
        }
      });
      wx.request({
        url: 'http://www.aiqianduan.com:56506/cars?page=1',
        success:(res)=>{
          console.log(res.data.results);          
            this.setData({
              res:res.data.results
            })
        }
      })    
  },
  bindscrolltolower(){
    wx.showLoading({
      title: '加载中'
    })
    page++;
    wx.request({
      url: 'http://www.aiqianduan.com:56506/cars?page='+page,
      success:(res)=>{
          this.setData({
            res:[...this.data.res,...res.data.results]
          })
          wx.hideLoading()
      }
    })    
  },
  shanxuan(){
    this.setData({
      isShowDrawer:true
    })
  },
  onClose(){
    this.setData({
      isShowDrawer:false
    })
  },
  close(){
    this.setData({
      isShowDrawer:false
    })
  },
  ok(e){
     page=1;
     this.setData({
      isShowDrawer:false
    })
      console.log(e);
      wx.showLoading({
        title: '加载中'
      })
      wx.request({
        url: 'http://www.aiqianduan.com:56506/cars?page='+page+"&brand="+e.detail.brand,
        success:(res)=>{
          console.log(e.detail.brand);
          
          this.setData({
            res:res.data.results,
            brand:e.detail.brand
          });
          wx.hideLoading()
        }
      })
     
      
      
  }
})