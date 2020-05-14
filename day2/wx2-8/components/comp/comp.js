// components/comp/comp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        b:{
            type:'Number',
            value:0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        a:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addA(){
            this.setData({
                a:this.data.a+1
            })
        },
        addB(){
           this.triggerEvent('selfE')
        }
    }
})
