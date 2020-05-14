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
    data: {
        wH:0,
        i:[],
        all:{},
        nowchoose:''
        
    },
    lifetimes:{
        attached(){
            wx.request({
              url: 'http://www.aiqianduan.com:56506/allbs',
              success:(res)=>{  
                  console.log(res.data);
                  
                  let o=[];
                  for(let k in res.data){
                    let item={
                        k:k,
                        list:[]
                    }
                    o.push(item)
                    for(let pinpai in res.data[k]){
                       item.list.push(pinpai);
                    }                    
                  }
                  console.log(o);
                  
                  this.setData({
                    all:res.data,
                    i:Object.keys(res.data),
                    all_car:o                  
                  }) 
                  
              }
            });
            wx.getSystemInfo({
              success: (res) => {
                  this.setData({
                      wH:res.windowHeight
                  })
              },
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        bindcell(e){
            let p=e.target.dataset.n;
            this.setData({
                nowchoose:p
            })
            console.log(p);
            
        },
        okH(){
            this.triggerEvent('ok',{'pinpai':this.data.nowchoose})
        },
        brandqu(){
            this.triggerEvent('brandclose')
        }
    }
})
