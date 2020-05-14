Page({
  data:{
    arr:[1,4,8,12],
    b:3
  },
  changeblue(e){
    let n=e.target.dataset.n;
    if(this.data.b==n){
     this.setData({
       b:false
     })
    }else{
      this.setData({
        b:n
      })
    }
  },
  changered(e){
    let n=e.target.dataset.n;
    if(this.data.arr.includes(n)){
      this.setData({
        arr:this.data.arr.filter(item=>item!=n)
      })
    }else{
      if(this.data.arr.length<6){
        this.setData({
          arr:[...this.data.arr,n]
        })
      }else{
        wx.showToast({
          title: '已经够六个数了哦',
          icon:'none'
        })
      }
    }
    
  },
  sj(){
    let redarr=[];
    while(redarr.length<6){
      let n=parseInt(Math.random()*33+1);
      if(!redarr.includes(n)){
        redarr.push(n)
      }
    };
    this.setData({
      arr:redarr,
      b:parseInt(Math.random()*13+1)
    })
  }
})