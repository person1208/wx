// components/menu-inner/menu-inner.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       nowmenu:{
           type:String,
           value:''
       },
       nowarr:{
           type:Object,
           value:{}
       },
       nowa:{
           type:Array,
           value:[]
       }
    },

    /**
     * 组件的初始数据
     */
    data: {
       current:[]
    },
    lifetimes:{
        attached(){
            this.setData({
                current:this.properties.nowa
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
        }
    }
})
