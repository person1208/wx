let scrollarr=[0];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wH:null,
    products:{},
    products_keys:[],
    now:'健康坚果',
    nowid:'t1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          wH:res.windowHeight
        })
        
      },
    });
    wx.request({
      url: 'http://www.aiqianduan.com:56506/product',
      success:(res)=>{
        console.log(res.data.products,Object.keys(res.data.products));
        this.setData({
          products:res.data.products,
          products_keys:Object.keys(res.data.products)
        });
        
        let sum=0;
        for(let k in this.data.products){          
          sum+=this.data.products[k].length*120+22;
          scrollarr.push(sum);
        }
        console.log(scrollarr);
      }
    })   
    
  },
itemLH(e){
  this.setData({
    now:e.currentTarget.dataset.n,
    nowid:"t"+e.currentTarget.dataset.i
  })
  
},
scrollR(e){
  let top=e.detail.scrollTop;
  for(let i=0;i<scrollarr.length;i++){
    if(top>scrollarr[i]&&top<scrollarr[i+1]){
      this.setData({
        now:this.data.products_keys[i]
      })      
    }
  }  
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