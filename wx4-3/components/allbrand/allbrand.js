// components/allbrand/allbrand.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data:{
        wH:0,
        allcar:[],
        nowcur:''
    },
    lifetimes:{
        attached(){
            wx.getSystemInfo({
              success: (res) => {
                this.setData({
                    wH:res.windowHeight
                })
              }
            });
            wx.request({
              url: 'http://www.aiqianduan.com:56506/allbs',
              success:(res)=>{
                console.log(res.data);
                    var arr=[];
                    for(let k in res.data){
                        var item={
                            key:k,
                            list:[]
                        }
                        arr.push(item)
                        for(let pinpai in res.data[k]){
                            item.list.push(pinpai)
                        }
                    }
                    console.log(arr);    
                    this.setData({
                        allcar:arr
                    })                
              }
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        allbrandH(e){
            this.setData({
                nowcur:e.target.dataset.i
            })
        },
        okallbrand(){
            this.triggerEvent('okbrand',{'nowcur':this.data.nowcur})
        },
        quxiaoallbrand(){
            this.triggerEvent('close')
        }
    }
})
