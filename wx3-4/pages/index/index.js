//index.js
//获取应用实例
let page=1;
let brand='';
Page({
    data:{
        res:[],
        wH:0,
        show:false,
        brand:''
    },
    onReady(){
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            wH:res.windowHeight
          })
        },
      })
      wx.request({
        url: 'http://www.aiqianduan.com:7897/cars?page='+page,
        success:(res)=>{
          console.log(res.data);          
            this.setData({
              res:res.data.results
            })
        }
      })
    },
    lowerH(){
      page++;
      wx.showLoading({
        title: '加载中',
      });      
      wx.request({
        url: 'http://www.aiqianduan.com:7897/cars?page='+page+'&brand='+brand,
        success:(res)=>{
            this.setData({
              res:[...this.data.res,...res.data.results]
            })
            wx.hideLoading()
        }
      })
    },
    onClose() {
      this.setData({ show: false });
    },
    showPopup() {
      this.setData({ show: true });
    },
    drawerokHan(e){
      console.log(e);
      this.setData({ show: false });
      brand=e.detail.brand;
      wx.request({
        url: 'http://www.aiqianduan.com:7897/cars?page=1&brand='+brand,
        success:(res)=>{
            this.setData({
              res:res.data.results
            })
        }
      })
    }
})