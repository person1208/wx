// pages/detail/detail.js
Page({
    data: {
        date: '',
        show: false,
        value: 3
      },
    
      onDisplay() {
        this.setData({ show: true });
      },
      onClose() {
        this.setData({ show: false });
      },
      onChange(event) {
        this.setData({
          value: event.detail
        });
      }
})