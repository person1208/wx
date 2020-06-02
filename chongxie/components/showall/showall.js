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
        nowcurrent:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        nowc:'',
        nowe:'',
        nowoptions:[],
        wH:0,
        current:[]
    },
    lifetimes:{
        attached(){
            wx.getSystemInfo({
               success: (res) => {
                   this.setData({
                       wH:res.windowHeight
                   })
               },
            });
            this.setData({
                nowc:this.properties.nowc,
                nowe:this.properties.nowe,
                nowoptions:this.properties.nowoptions,
                current:this.properties.nowcurrent
            })
            
        }
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
        showallreset(){
            this.setData({
                current:[]
            })
        },
        showallclose(){
            this.triggerEvent('showallclose')
        },
        showallok(){
            this.triggerEvent('showallok',{
                current:this.data.current,
                nowe:this.properties.nowe
            })
        }
    }
})
