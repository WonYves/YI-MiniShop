// pages/detail/detail.js
import CheckAuth from "../../util/auth"
import request from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    handleChange(){
        wx.switchTab({
          url: '/pages/shopcar/shopcar',
        })
    },
    handleTap(evt){
        wx.previewImage({
            current: evt.currentTarget.dataset.current, // 当前显示图片的 http 链接
            urls: this.data.info.slides.map(item=>`http://localhost:5000${item}`) // 需要预览的图片 http 链接列表
          })
    },
    data: {
        info:null,
        current:0,
        commentlist:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    handleActive(evt){
        this.setData({
            current:evt.currentTarget.dataset.index
        })
    },
    onLoad(options) {
        console.log(options);
        wx.setNavigationBarTitle({
            title: options.name
          })
        this.getDetailInfo(options.id)
        this.getCommentInfo()
    },
    getDetailInfo(id){
        request({
            url:`/goods/${id}`
        }).then(res=>{
            console.log(res);
            this.setData({
                info:res
            })
        })
    },
    getCommentInfo(){
        request({
            url:"/comments"
        }).then(res=>{
            console.log(res);
            this.setData({
                commentlist:res
            })
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

    },
    handleAdd(){
        //1.判断本地存储是否有手机号信息 如果有 直接加入 
        //2.没有手机号 判断是否有token信息   授权信息 如果有 引导跳转到手机号绑定
        //3.没有授权信息 我们先引导用户到授权页面
        CheckAuth(()=>{
            console.log("准备加入购物车")
            let {nickName} = wx.getStorageSync('token')
            let tel = wx.getStorageSync('tel')
            var goodId = this.data.info.id
            // console.log(nickName,tel,goodId);
            request({
                url:"/carts",
                data:{
                    tel,
                    goodId,
                    nickName
                }
            }).then(res=>{
                console.log(res);
                if(res.length===0){
                    return request({
                        url:"/carts",
                        method:"post",
                        data:{
                            "username": nickName,
                            "tel": tel,
                            "goodId": goodId,
                            "number": 1,
                            "checked": false,
                        }
                    })
                }else{
                    return request({
                        url:`/carts/${res[0].id}`,
                        method:"put",
                        data:{
                           ...res[0],
                           number:res[0].number+1
                        }
                    })
                }
            }).then(res=>{
                wx.showToast({
                  title: '加入购物车成功',
                })
            })
        })
    }
})