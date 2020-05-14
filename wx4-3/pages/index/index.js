let page=1;
Page({
  data:{
    wH:0,
    res:[],
    isShowDrawer:false,
    brand:'',
    color:[],
    fuel:[],
    exhaust:[],
    engine:[],
    filters:[
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
      url: 'http://www.aiqianduan.com:56506/cars?page='+page+'&brand='+this.data.brand+"&color="+this.data.color.join('v')+
      '&fuel='+this.data.fuel.join('v')+'&exhaust='+this.data.exhaust.join('v')+'&engine='+this.data.engine.join('v'),
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
        url: 'http://www.aiqianduan.com:56506/cars?page='+page+"&brand="+e.detail.brand
        +'&color='+e.detail.color.join('v')+'&fuel='+e.detail.fuel.join('v')+'&exhaust='+e.detail.exhaust.join('v')+'&engine='+e.detail.engine.join('v'),
        success:(res)=>{
          console.log(e.detail.brand);
          
          this.setData({
            res:res.data.results,
            brand:e.detail.brand,
            color:e.detail.color,
            fuel: e.detail.fuel,
            exhaust: e.detail.exhaust,
            engine: e.detail.engine
          });
          wx.hideLoading()
        }
      })
     
      
      
  }
})