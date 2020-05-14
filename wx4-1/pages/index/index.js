//index.js
//获取应用实例
let page=1;
Page({
    data:{
        res:[],
        wH:0,
        show:false,
        brand:'',
        color:'',
        fuel:'',
        filters: [
          {
              'c': '颜色',
              'e': 'color',
              'options': ['红', '黄', '蓝', '绿', '黑', '白', '银灰', '咖啡', '香槟', '橙', '灰']
          },
          {
              'c': '燃料',
              'e': 'fuel',
              'options': ['汽油', '柴油', '油电混合', '纯电动']
          },
          {
              'c': '尾气标准',
              'e': 'exhaust',
              'options': ['国一', '国二', '国三', '国四', '国五']
          },
          {
              'c': '发动机排量',
              'e': 'engine',
              'options': ['1.0L', '1.2L', '1.4L', '1.4T', '1.6L', '1.6T', '1.8L', '1.8T', '2.0L', '2.0T', '2.2L', '2.2T', '3.0L', '3.0T', '4.0L', '4.0T', '5.0L', '5.0T']
          }
      ]
    },
    onReady(){
      wx.getSystemInfo({
        success: (res) => {
          console.log(res);
          
          this.setData({
            wH:res.windowHeight
          })
        },
      });
      wx.request({
        url: 'http://www.aiqianduan.com:56506/cars?page=1',
        success:(res)=>{
          console.log(res);          
            this.setData({
              res:res.data.results
            })
        }
      });
     
    },
    lowerH(){
      page++;
      wx.showLoading({
        title: '加载中',
      });      
      wx.request({
        url: 'http://www.aiqianduan.com:56506/cars?page='+page+'&brand='+this.data.brand+'&color='+this.data.color.join('v')+ '&fuel=' + this.data.fuel.join('v'),
        success:(res)=>{
          console.log(res);
          
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
      wx.request({
        url: 'http://www.aiqianduan.com:56506/cars?page=1&brand='+e.detail.brand+'&color='+e.detail.color.join('v')+ '&fuel=' + e.detail.fuel.join('v'),
        success:(res)=>{
            this.setData({
              res:res.data.results,
              brand:e.detail.brand,
              color:e.detail.color,
              fuel:e.detail.fuel
            })
            console.log(e.detail.color);
            
        }
      })
    },
    closeH(){
      this.setData({ show: false });
    }
})