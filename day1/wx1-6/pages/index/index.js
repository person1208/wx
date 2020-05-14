Page({
  data:{
    arr:[1,3,5,11]
  },
 redball(e){
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
          title: '最多只能选六个哦',
          icon:'none'
        })
      }
     
    }
   
    
 },
 sj(){
   var sjArr=[];
   while(sjArr.length<6){
     let n=parseInt(Math.random()*33+1);
     if(!sjArr.includes(n)){
       sjArr.push(n);
     }
   }
  this.setData({
    arr:sjArr
  })
 }
})