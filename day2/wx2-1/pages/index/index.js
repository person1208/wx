Page({
  data:{
      mydata:{
          a:23,
          b:45
      }
  },
  add(){
      this.setData({
          mydata:{
              ...this.data.mydata,
            a:this.data.mydata.a+1
        }
      })
  }
})