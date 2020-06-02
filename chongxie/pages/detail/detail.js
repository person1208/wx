// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        wH:0,
        page:1,
        results:[],
        isShow:false,
        brand:'',
        now:{
            color:[],
            fuel:[],
            exhaust:[],
            engine:[]
        },
        filters: [{
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
            'c': '尾气',
            'e': 'exhaust',
            'options': ['国一', '国二', '国三', '国四', '国五']
        },
        {
            'c': '排量',
            'e': 'engine',
            'options': ['1.0L', '1.2L', '1.4L', '1.4T', '1.6L', '1.6T', '1.8L', '1.8T', '2.0L', '2.0T', '2.2L', '2.2T', '3.0L', '3.0T', '4.0L', '4.0T', '5.0L', '5.0T']
        }
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    loadData(){
        wx.showLoading({
            title: '加载更多',
        });
        wx.request({
            url: 'http://www.aiqianduan.com:56506/cars?page='+this.data.page+
            '&brand='+this.data.brand+
            '&color='+this.data.now.color.join('v')+
            '&exhaust='+this.data.now.exhaust.join('v')+
            '&engine='+this.data.now.engine.join('v'),
            success:(res)=>{
                console.log(res);              
                this.setData({
                    results:[...this.data.results,...res.data.results]
                });
                wx.hideLoading()
            }
        })
    },
    onLoad: function (options) {
       this.loadData();
        wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  wH:res.windowHeight
              })
          },
        })
    },
    lowerH(){
        this.setData({
            page:this.data.page+1           
        },function(){
            this.loadData();
        });
       
    },
    drawerH(){
        this.setData({
            isShow:true
        })
    },
    detaildrawerclose(){
        this.setData({
            isShow:false
        })
    },
    detailclose(){
        this.setData({
            isShow:false
        })
    },
    detailok(e){
        this.setData({
            isShow:false,
            page:1,
            brand:e.detail.brand,
            now:e.detail.now,
            results:[]  //这里很重要
        },function(){
            this.loadData()
        })
       
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})