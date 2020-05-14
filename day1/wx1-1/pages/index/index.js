Page({
  data:{
    a:10
  },
  add(){
    this.setData({  
      a:this.data.a+1
    });
    
  },
  minus(){
    this.setData({
      a:this.data.a-1
    });
  }
})