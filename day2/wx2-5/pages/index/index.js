Page({
    data:{
        windowHeight:0,
        products:{},
        products_keys:[],
        nowType:'健康坚果',
        nowid:'0'
    },
    onReady(){
        wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  windowHeight:res.windowHeight
              })              
          },
        }),
        wx.request({
          url: 'http://www.aiqianduan.com:8922/product',
          success:(res)=>{           
            this.setData({
                products:res.data.products,
                products_keys:Object.keys(res.data.products)
            });
            console.log(res.data.products,this.data.products_keys);
          }
        })
    },
    jump(e){
        let i=e.target.dataset.i;
        let n=e.target.dataset.n;
        this.setData({
            nowid:i,
            nowType:n
        })
        
    },
    scrollH(e){
        // console.log(e.detail.deltaY);
        if(e.detail.deltaY<0){
            const query = wx.createSelectorQuery()
            query.select('#t'+(this.data.nowid+1)).boundingClientRect()
            query.selectViewport().scrollOffset()
            query.exec((res)=> {
                  console.log( res[0].top );
                  if(res[0].top<=0){
                      this.setData({
                          nowid:this.data.nowid+1,
                          nowType:this.data.products_keys[this.data.nowid+1]
                      })
                  }
            })   
        }
       
         
    }
})