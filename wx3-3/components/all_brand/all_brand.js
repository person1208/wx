// components/all_brand/all_brand.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        windowHeight:0,
        allbrand:{},
        allbrand_key:[]
    },
    lifetimes:{
        attached(){
            wx.getSystemInfo({
                success: (res) => {
                    this.setData({
                        windowHeight:res.windowHeight
                    })
                },
            });
            wx.request({
                url: 'http://www.aiqianduan.com:7897/allbs',
                success:(res)=>{
                    console.log(res.data);
                    this.setData({
                        allbrand:res.data,
                        allbrand_key:Object.keys(res.data)
                    })
                    
                }
              })
        }      
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
