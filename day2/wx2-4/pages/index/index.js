Page({
    data:{
        m:10
    },
    addOne(e){
        console.log(e);
        
        this.setData({
            m:this.data.m+e.detail
        })
    }
})