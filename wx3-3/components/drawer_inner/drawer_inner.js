// components/drawer_inner/drawer.js
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
        nowshow:'main'
    },
    lifetimes:{
        attached(){
            wx.getSystemInfo({
                success: (res) => {
                    this.setData({
                        windowHeight:res.windowHeight
                    })
                },
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        showallbrand(){
            this.setData({
                nowshow:'allbrand'
            })
        }
    }
})
