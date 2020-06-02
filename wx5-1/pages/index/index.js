Page({
  data:{
    page:1,
    wH:0,
    res:[],
    isShowDrawer:false,
    nowall:{
      brand:'',
      color:[],
      fuel:[],
      exhaust:[],
      engine:[]
    },
    nowmenu:'',
    e:'',
    c:'',
    options:'',
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
      this.loadData();
  },
  loadData(){
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'http://www.aiqianduan.com:56506/cars?page='+this.data.page+
      '&brand='+this.data.nowall.brand+
      '&color='+this.data.nowall.color.join('v')+
      '&exhaust='+this.data.nowall.exhaust.join('v')+
      '&engine='+this.data.nowall.engine.join('v'),
      success:(res)=>{
        console.log(res.data.results);          
          this.setData({
            res:[...this.data.res,...res.data.results] 
          });
          wx.hideLoading()
      }
    })    
    
  },
  bindscrolltolower(){ 
    this.setData({
      page:this.data.page+1
    },function(){
      this.loadData()
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
  
     this.setData({
      isShowDrawer:false,
      page:1,
      res:[],
      nowall:{
        ...this.data.nowall,
        brand:e.detail.brand,
        color:e.detail.color,
        fuel: e.detail.fuel,
        exhaust: e.detail.exhaust,
        engine: e.detail.engine
      }      
    },function(){
      this.loadData()
    })
    console.log(this.data.nowall);
    
  },
  menutab(ev){
    console.log(ev.target);
    
    this.setData({
      nowmenu:ev.target.dataset.e
    })
       
  },
  closemenu(){
    this.setData({
      nowmenu:''
    })
  }
})