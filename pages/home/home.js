// pages/home/home.js
import request from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    handleEvent(){
        console.log("搜索处理");
        wx.navigateTo({
          url: '/pages/search/search',
        })
    },
    handleChange(evt){
        //跳转到小程序应用中的某个页面
        var id = evt.currentTarget.dataset.id
        var name = evt.currentTarget.dataset.name
        
        wx.navigateTo({
                                    // 在跳转的同时传递参数ID 和 标题
          url: `/pages/detail/detail?id=${id}&name=${name}`,
        })
    },
    data: {
        looplist:[],
        goodlist:[]
    },
    current:1,
    total:0,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
      this.renderSwiper(),
      this.renderGoods()
    },
    renderSwiper(){
        request({
          url:"/recommends"
        }).then(res=>{
        //   console.log(res)
          this.setData({
            looplist:res
          })
        })
    },
    renderGoods(){
        request({
            url:`/goods?_page=${this.current}&_limit=5`
        },true).then(res =>{
            // console.log(res)
            this.total = Number(res.total)
            this.setData({
                goodlist:[...this.data.goodlist,...res.list]
            })
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        setTimeout(()=>{
            //更新数据了
            wx.stopPullDownRefresh()  //停止下拉刷新
        },1000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.goodlist.length==this.total){
            return
        }
        this.current++
        this.renderGoods()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    handleget(){
     request({
       url:"/users"
     }).then(res=>{
      console.log(res);
     })
    },
    handlepost(){
      request({
        url: '/users',
        method:"POST",
        data:{
          username:"小明",
          password:"5599"
        }
      }).then(res=>{
        console.log(res);
      })
    },
    handleput(){
      request({
        url: '/users/2',   
        method:"PUT",
        data:{
          username:"tiechui",
          password:"456"
        }
      }).then(res=>{
        console.log(res);
      })
    },
    handledelete(){
      request({
        url: '/users/2',
        method:"DELETE",
      }).then(res=>{
        console.log(res);
      })
    }
})