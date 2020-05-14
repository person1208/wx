Page({
    data:{
        to:'aa'
    },
    jump(e){
        let n=e.target.dataset.n;
        this.setData({
            to:n
        })
    }
})