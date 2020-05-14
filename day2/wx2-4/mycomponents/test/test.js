// mycomponents/test/test.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mystr:{
            type:'String',
            value:''
        },
        info:{
            type:'Nmber',
            value:''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
       n:3,
       a:13
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
        add(){
            this.triggerEvent('myEv',this.data.n)
        }
    }
})
