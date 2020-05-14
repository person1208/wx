// components/drawer/drawer.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        n:{
            type:'Object',
            value:"{}"
        },
        brand:{
            type:String,
            value:''
        },
        filters:{
            type:Array,
            value:[]
        },
        
    },
   
    /**
     * 组件的初始数据
     */
    data: {
        wH:0,
        nowshow:'main',
        arr:['宝马','本田','丰田','奔驰','奥迪'],
        brand:'',
        filters:[],
        now:{
            color:[],
            fuel:[],
            exhaust:[],
            engine:[]
        },
        nowc: '颜色',
        nowoptions: ['红', '黄', '蓝', '绿'],
        nowe: 'color'
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
                brand:this.properties.brand,
                filters:this.properties.filters
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        showall(){
            this.setData({
                nowshow:'allbrand'
            })
        },
        okHan(e){
            console.log(e);
            this.setData({
                brand:e.detail.pinpai,
               
            })
            this.setData(
                {
                    nowshow:'main'
                }
            )
        },
        drawerok(){
            this.triggerEvent('drawerokH',{
                'brand':this.data.brand,
                color: this.data.now.color,
                fuel: this.data.now.fuel,
                exhaust: this.data.now.exhaust,
                engine: this.data.now.engine
            })
        },
        pin(e){
            let p=e.target.dataset.p;
            this.setData({
                brand:p
            })
        },
        pinM(e){
            let k=e.target.dataset.k;
            let v=e.target.dataset.v;
            console.log(v);            
            if(this.data.now[k].includes(v)){
                this.setData({
                    now:{
                        ...this.data.now,
                        [k]:this.data.now[k].filter(item=>item!=v) 
                    }
                })                             
            }else{
                this.setData({
                    now:{
                        ...this.data.now,
                        [k]:[...this.data.now[k],v]
                    }
                })
            }
            this.setData({
                // brand:e.target.dataset.p
            })
        },
        close(){
            this.triggerEvent('closebtn')
        },
        reset(){
            this.setData({
                brand:''
            })
        },
        closebrand(){
            this.setData({
                nowshow:'main'
            })
        },
        showoptions(e){
            let c=e.target.dataset.c;
            let k=e.target.dataset.k;
            let options=e.target.dataset.options;
            this.setData({
                nowc:c,
                nowe:k,
                nowoptions:options,
                nowshow:'showall'
            })
        },
        ok(e){
            console.log(e.detail.e);
            console.log(e.detail.current);
            
            this.setData({
                now:{
                    ...this.data.now,
                    [e.detail.e]:e.detail.current
                },
                nowshow:'main'
            })
            
        }
    }
})
