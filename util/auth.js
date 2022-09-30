function CheckAuth(callback){
    //if()
    //1.判断本地存储是否有手机号信息 如果有 直接加入 
    //2.没有手机号 判断是否有token信息   授权信息 如果有 引导跳转到手机号绑定
    //3.没有授权信息 我们先引导用户到授权页面
    if(wx.getStorageSync('tel')){  //获取这个手机号判断一下在不在
        //在的话就处理业务 
        //回调使用者的代码
        callback()
    }else{
        if(wx.getStorageSync('token')){  //没有手机号就 获取一下有没有授权
            wx.navigateTo({  //有就跳转到手机绑定
              url: '/pages/telform/telform',   
            })
        }else{      //没有的话就跳转到授权页面  
            wx.navigateTo({
              url: '/pages/auth/auth',
            })
        }
    }

}

export default CheckAuth