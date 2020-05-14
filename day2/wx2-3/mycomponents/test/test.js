// mycomponents/test/test.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mystr:{
            type:'string',
            value:''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        a:1,
        b:2,
        c:4
    },

    /**
     * 组件的方法列表
     */
    methods: {
        add(){
            this.setData({
                a:this.data.a+1
            })
        }
    }
})
