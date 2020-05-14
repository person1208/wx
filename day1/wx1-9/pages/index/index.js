Page({
  data:{
    arr:['男','女'],
    nianji:['大一','大二','大三','大四'],
    index:0,
    nianjiindex:0
  },
 change(e){
  console.log(e.detail.value);
  this.setData({
    index:e.detail.value
  })
  
 },
 changenianji(e){
  console.log(e.detail.value);
  this.setData({
    nianjiindex:e.detail.value
  })
  
 }
})