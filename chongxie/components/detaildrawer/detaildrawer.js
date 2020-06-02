// components/detaildrawer/detaildrawer.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        brand:{
            type:String,
            value:''
        },
        filters:{
            type:Array,
            value:[]
        },
        nowcur:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        wH:0,
        pinpaiarr:['宝马','奔驰','奥迪','本田','丰田','标志','日产','五菱'],
        nowshow:'detaildrawer',
        brand:'',
        filters:[],
        nowc:'',
        nowe:'',
        nowoptions:[],
        now:{
            color:[],
            fuel:[],
            exhaust:[],
            engine:[]
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        all(){
            this.setData({
                nowshow:'allbrand'
            })
        },
        detaildrawerclose(){
            this.setData({
                nowshow:'detaildrawer'
            })
        },
        detaildrawerok(e){
            console.log(e.detail.nowbrand);
            this.setData({
                brand:e.detail.nowbrand,
                nowshow:'detaildrawer'
            })
        },
        detaildrawerbrand(e){
            console.log(e)
            this.setData({
              brand:e.currentTarget.dataset.brand
            })
        },
        detaildrawerreset(){
            this.setData({
                brand:'',
                now:{
                    color:[],
                    fuel:[],
                    exhaust:[],
                    engine:[]
                }
            })
        },
        detailclose(){
            this.triggerEvent('detailclose')
        },
        detailok(){            
            this.triggerEvent('detailok',{
                brand:this.data.brand,
                now:{...this.data.now}
            })
        },
        detaildrawerbrandH(e){
            let k=e.currentTarget.dataset.k; 
            let nowleimu=e.currentTarget.dataset.leimu; 
            if(this.data.now[k].includes(nowleimu)){
                this.setData({
                    now:{...this.data.now,[k]:this.data.now[k].filter(item=>item!=nowleimu)}
                })
            }else{
                this.setData({
                    now:{...this.data.now,[k]:[...this.data.now[k],nowleimu]}
                })  
            }
        },
        allleimu(e){
            let le=e.currentTarget.dataset.le;
            console.log(le);
            let lc=e.currentTarget.dataset.lc;
            let options=e.currentTarget.dataset.options;
            
            this.setData({
                nowshow:'showall',
                nowc:lc,
                nowe:le,
                nowoptions:options
            });

        },
        showallclose(){
            this.setData({
                nowshow:'detaildrawer'
            })
        },
        showallok(e){
            this.setData({
                nowshow:'detaildrawer',
                now:{...this.data.now,[e.detail.nowe]:e.detail.current}
            })
        }
    },
    lifetimes:{
        attached(){
            console.log(this.properties.nowcur);            
            wx:wx.getSystemInfo({              
              success: (res) => {
                  this.setData({
                      wH:res.windowHeight,
                      brand:this.properties.brand,
                      filters:this.properties.filters,
                      now:this.properties.nowcur                      
                  })
              }
            })
        }
    }
})
