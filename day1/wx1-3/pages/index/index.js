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
  }
});