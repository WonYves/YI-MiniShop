//             接收参数
function request(params,isHeader=false){
//     Promise接收2个参数
  return new Promise((resolve,reject)=>{
    //触发Loading
    wx.showLoading({
      title: '来了嗷',
    }),
   // 封装ajax
    wx.request({
      //展开参数 放在这和后面的内容进行拼接
      ...params,
      url:"http://localhost:5000"+params.url,
      //请求成功之后
      success:(res)=>{
          if(isHeader){
              resolve({
                  list:res.data,
                  total:res.header["X-Total-Count"]
              })
          }else{resolve(res.data)}
      },
      //请求失败
      fail:(err)=>{
        reject(err)
      },
      // 隐藏Loading
      complete:()=>{
        wx.hideLoading({
          success:(res)=>{}
        })
      }
    })
  })
}

export default request