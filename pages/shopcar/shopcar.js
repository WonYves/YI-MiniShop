// pages/shopcar/shopcar.js
import CheckAuth from "../../util/auth";
import request from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    
    handlebind(evt){
        var check = evt.currentTarget.dataset.item;
        check.checked = !check.checked
        this.handleUpdate(check)
    },
    //+处理函数
    handleAdd(evt){
        var check = evt.currentTarget.dataset.item;
        check.number++
        this.handleUpdate(check)
    },
    //-处理函数
    handleReduce(evt){
        var check = evt.currentTarget.dataset.item;
        if(check.number===1){
            return
        }
        check.number--
        this.handleUpdate(check)
    },
    handleUpdate(check){
        this.setData({
            cartlist:this.data.cartlist.map(data=>{
                if(data.id===check.id){
                    return check
                }
                return data
            })
        })
        request({
            url:`/carts/${check.id}`,
            method:'put',
            data:{
                "username": check.username,
                "tel": check.tel,
                "goodId": check.goodId,
                "number": check.number,
                "checked": check.checked
            }
        })
    },
    handleTo(evt){
        var id = evt.currentTarget.dataset.id
        var name = evt.currentTarget.dataset.name
        wx.navigateTo({
                                    // 在跳转的同时传递参数ID 和 标题
          url: `/pages/detail/detail?id=${id}&name=${name}`,
        })
    },
    handleLeft(evt){
        console.log("删除",evt.currentTarget.dataset.id)
        var id = evt.currentTarget.dataset.id
        this.setData({
            cartlist:this.data.cartlist.filter(item=>item.id!==id)
        })
        request({
            url:`/carts/${id}`,
            method:"delete"
        })
    },
    data: {
        cartlist:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            spliceButton:[{
                type:'warn',
                text:'删除'
            }]
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
        CheckAuth(()=>{
            // console.log("显示购物车")
            let {nickName} = wx.getStorageSync('token')
            let tel = wx.getStorageSync('tel')
            request({
                //请求回来的是当前用户的当前手机号的  并且展开
                url:`/carts?_expand=good&username=${nickName}&tel=${tel}`
            }).then(res=>{
                console.log(res);
                this.setData({
                    cartlist:res
                })
            })
        })
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
    //购物车全选功能
    handleChange(evt){
        console.log(evt.detail.value);
        if(evt.detail.value.length===0){
            //未全选
            this.setData({
                cartlist:this.data.cartlist.map(item=>({
                    //返回新对象加上小括号  花括号内为函数体
                    ...item,
                    checked:false
                }))
            })
        }else{
            //全选
            this.setData({
                cartlist:this.data.cartlist.map(item=>({
                    //返回新对象加上小括号  花括号内为函数体
                    ...item,
                    checked:true
                }))
            })
        }
    }
})