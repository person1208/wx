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
        },
        now:{
            type:Object,
            value:{}
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
            this.setData({
                current:this.properties.now[this.properties.nowe]
            })         
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
            console.log(this.data.current);     
        },
        quxiao(){
            this.triggerEvent('showallquxiao')
        },
        reset(){
            this.setData({
                current:[]
            })
        },
        okH(){
            this.triggerEvent('showallok',{
                e:this.properties.nowe,
                current:this.data.current
            })
        }
    }
})
