// components/allbrand/allbrand.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        brand:{
            type:String,
            value:''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        wH:0,
        allbs:{},
        allkey:[],
        allbsarr:{},
        nowbrand:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        brandcell(e){
            this.setData({
                nowbrand:e.target.dataset.brand
            })
        },
        detaildrawerclose(){
            this.triggerEvent('detaildrawerclose')
        },
        detaildrawerok(){
            this.triggerEvent('detaildrawerok',{nowbrand:this.data.nowbrand})
        }
    },
    lifetimes:{
       attached(){
           wx.getSystemInfo({
             success: (res) => {
                 console.log(this.properties.brand);
                 this.setData({
                     wH:res.windowHeight,
                     nowbrand:this.properties.brand
                 })
             },
           })
            wx.request({
                 url: 'http://www.aiqianduan.com:56506/allbs',
                 success:(res)=>{
                     console.log(res);
                     let arr=[];
                     for(let zimu in res.data){
                        let item={
                            key:zimu,
                            list:[]
                        }
                        arr.push(item);
                        for(let pinpai in res.data[zimu]){
                            item.list.push(pinpai)
                        }
                     }
                     console.log(arr);
                     
                     this.setData({
                         allbs:res.data,
                         allkey:Object.keys(res.data),
                         allbsarr:arr
                     })
                     
                 }
            })
       }
    }
})
