Page({
  data:{
    arr:['AA','BB','CC','DD'],
    content:''
  },
  changev(e){
    this.setData({
      content:e.detail.value
    })
  },
  insert(){
    console.log(this.data.content);
    
    this.setData({
      arr:[...this.data.arr,this.data.content]
    });
  },
  del(e){
    let n=e.target.dataset.n;
    wx.showModal({
      title:'动作危险！',
      content:'真的要删除'+this.data.arr[n]+'吗？',
      success:(o)=>{
        if(o.confirm){
          this.setData({
            arr:this.data.arr.filter((item,index)=>index!=n)
          });
          wx.showToast({
            title: '成功删除',
          })
        }
      }
    })
  
   
  }
});