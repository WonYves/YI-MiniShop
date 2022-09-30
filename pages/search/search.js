// pages/search/search.js
import request from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    search:function(value){
        return Promise.all([
            request({
                url:`/categories?title_like=${value}`
            }),
            request({
                url:`/goods?title_like=${value}`
            })
        ]).then(res=>{
            return[...res[0].map(item=>({
                ...item,
                text:item.title,
                type:1
            })),...res[1].map(item=>({
                ...item,
                text:item.title,
                type:2
            }))];
        })
    },
    selectResult:function(e){
        console.log('search result',e.detail.item.type)
        if(e.detail.item.type===1){
            console.log("搜索列表")
            wx.navigateTo({
              url: `/pages/searchlist/searchlist?id=${e.detail.item.id}&name=${e.detail.item.title}`,
            })
        }else{
            console.log("详情页面")
            wx.navigateTo({
              url: `/pages/detail/detail?id=${e.detail.item.id}&name=${e.detail.item.title}`,
            })
        }
    },
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            search:this.search.bind(this)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})