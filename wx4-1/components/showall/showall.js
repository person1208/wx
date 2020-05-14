// components/showall/showall.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        nowc:{
            type:String,
            value:''
        },
        nowe:{
            type:String,
            value:''
        },
        nowoptions:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        wH:0,
        current:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleFruitChange({ detail = {} }) {
            const index = this.data.current.indexOf(detail.value);
            index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
            this.setData({
                current: this.data.current
            });
        },
        okH(){
            this.triggerEvent('ok',{
                e:this.properties.nowe,
                current:this.data.current
            })
        }
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
    }
})
