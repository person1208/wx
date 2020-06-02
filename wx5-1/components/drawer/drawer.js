
Component({
    properties:{
        brand:{
            type:String,
            value:''
        },
        filters:{
            type:Array,
            value:[]
        },
        color:{
            type:Array,
            value:[]
        },
        exhaust:{
            type:Array,
            value:[]
        },
        fuel:{
            type:Array,
            value:[]
        },
        engine:{
            type:Array,
            value:[]
        }

    },
    data:{
        wH:0,
        arr:['宝马','奥迪','丰田','本田','大众'],
        nowshow:'main',
        nowchoose:'',
        filters:[],
        nowc:'',
        nowe:'',
        nowoptions:[],
        now: {
            color: [],
            fuel: [],
            exhaust: [],
            engine: []
        }
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
                nowchoose:this.properties.brand,
                now:{
                    ...this.data.now,
                    color:this.properties.color,
                    exhaust:this.properties.exhaust,
                    fuel:this.properties.fuel,
                    engine:this.properties.engine
                },
                filters:this.properties.filters
            })
        }
    },
    methods:{
        showallbrand(){
            this.setData({
                nowshow:'allbrand'
            })
        },
        okH(){
            this.triggerEvent('ok',{
                brand:this.data.nowchoose,
                color:this.data.now.color,
                fuel: this.data.now.fuel,
                exhaust: this.data.now.exhaust,
                engine: this.data.now.engine
            })
        },
        pinpaiH(e){
            if(this.data.nowchoose==e.target.dataset.brand){
                this.setData({
                    nowchoose:''
                })
            }else{
                this.setData({
                nowchoose:e.target.dataset.brand
            })
            }
            
        },
        ok(e){
            this.setData({
                nowchoose:e.detail.nowcur,
                nowshow:'main'
            })
        },
        quxiao(){
            this.triggerEvent('close')
        },
        reset(){
            this.setData({
                nowchoose:'',
                now: {
                    ...this.data.now, 
                    color: [],
                    fuel: [],
                    exhaust: [],
                    engine: []
                }
            })
        },
        close(){
            this.setData({
                nowshow:'main'
            })
        },
        showallok(e){
            console.log(e.detail.e);
            this.setData({
                nowshow:'main',
                now:{
                    ...this.data.now,
                   [ e.detail.e]:e.detail.current
                }
            })
        },
        
        all(ev){
            var c=ev.target.dataset.c;   
            var e=ev.target.dataset.e;            
            var options=ev.target.dataset.options;   
            this.setData({
                nowc:c,
                nowe:e,
                nowoptions:options,
                nowshow:'showall'
            })
            
        },
        showallquxiao(){
            this.setData({
                nowshow:'main'
            })
        },
        gaoliang(e){
            var k=e.target.dataset.k;
            var v=e.target.dataset.v;
            console.log(k,v);
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
           
        }
    }
})