let arr=[0];
Page({
    data:{
        products:{},
        windowHeight:0,
        pro_keys:[],
        name:'健康坚果',
        nowid:0
    },
    onReady(){
        wx.request({
          url: 'http://www.aiqianduan.com:8922/product',
          success:(res)=>{
              let pro=res.data.products;  
              console.log(pro); 
              let sum=0;  
              for(let k in pro){
                  sum+=pro[k].length*120+40;
                  arr.push(sum)                 
              }     
              console.log(arr);                  
              this.setData({
                  products:pro,
                  pro_keys:Object.keys(pro)
              })    
          }
        }),
        wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  windowHeight:res.windowHeight
              })              
          }
        })
    },
    jump(e){
        console.log(e.target.dataset.name);
        this.setData({
            name:e.target.dataset.name,
            nowid:e.target.dataset.i
        })
    },
    scrollH(e){
        // console.log(e.detail.scrollTop);
    let scrollTop=e.detail.scrollTop;
       for(let i=0;i<arr.length;i++){
           if(scrollTop<arr[i+1]&&scrollTop>arr[i]){
               console.log(i);
               
               this.setData({
                   name:this.data.pro_keys[i]
               })
           }
       }
    }
})