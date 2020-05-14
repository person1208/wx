// components/drawer/drawer.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        n:{
            type:'Object',
            value:"{}"
        }
    },
   
    /**
     * 组件的初始数据
     */
    data: {
        wH:0,
        nowshow:'main',
        arr:['宝马','本田','丰田','奔驰','奥迪','五菱','日产','标致'],
        brand:''
    },
    lifetimes:{
        attached(){
            wx.getSystemInfo({
              success: (res) => {
                  this.setData({
                      wH:res.windowHeight
                  })
              },
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        showall(){
            this.setData({
                nowshow:'allbrand'
            })
        },
        okHan(e){
            console.log(e);
            this.setData({
                brand:e.detail.pinpai
            })
            this.setData(
                {
                    nowshow:'main'
                }
            )
        },
        drawerok(){
            this.triggerEvent('drawerokH',{'brand':this.data.brand})
        },
        pin(e){
            console.log(e.target.dataset.p);
            this.setData({
                brand:e.target.dataset.p
            })
        }
    }
})
