// pages/detail/detail.js
let page=1;
Page({
    data:{
        windowHeight:0,
        res:[],
        show: false
    },
    onReady(){
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    windowHeight:res.windowHeight
                })
            },
        }),
        wx.request({
          url: 'http://www.aiqianduan.com:7897/cars?page='+page,
          success:(res)=>{
              console.log(res.data.results);
              this.setData({
                  res:res.data.results
              })
          }
        })
    },
    lowerH(){
        console.log('到底了');
        wx.showLoading({
            title: '加载中',
        })
        page++;
        wx.request({
            url: 'http://www.aiqianduan.com:7897/cars?page='+page,
            success:(res)=>{
                console.log(res.data.results);
                this.setData({
                    res:[...this.data.res,...res.data.results]
                });
                wx.hideLoading()
            }
        })
        
    },
    showPopup() {
        this.setData({ show: true });
    },
    
     onClose() {
       this.setData({ show: false });
    }
})