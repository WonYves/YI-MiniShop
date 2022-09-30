# MiniShop弋购 基于微信小程序构建的手机商城项目 利用json-server实现的零编码伪后端接口

## 模拟json-server的目的就是在小程序开发中没有后端接口，或者是怕找的一些后端接口将来过期了之后，引入成本最低的方式就是json-server  就算前端开发中没有后端 也能模拟出一个后端来顺利开发 

##项目结构

components   组件
 
└─ search    搜索框

       ├─ search.js
       
       ├─ search.json
       
       ├─ search.wxml
       
      └─ search.wxss
       
pages

├─ auth  微信授权-页面 

    ├─ auth.js

    ├─ auth.json

    ├─ auth.wxml

    └─ auth.wxss

├─ category   分类-页面

    ├─ category.js

    ├─ category.json

    ├─ category.wxml

    └─ category.wxss

├─ center  我的-页面 

    ├─ center.js

    ├─ center.json

    ├─ center.wxml

    └─ center.wxss

├─ detail 商品详情-页面

    ├─ detail.js

    ├─ detail.json

    ├─ detail.wxml

    └─ detail.wxss

├─ home 首页商城-页面

    ├─ home.js

    ├─ home.json

    ├─ home.wxml

    └─ home.wxss

├─ search 搜索-页面

    ├─ search.js

    ├─ search.json

    ├─ search.wxml

    └─ search.wxss

├─ searchlist  搜索列表-页面

    ├─ searchlist.js

    ├─ searchlist.json

    ├─ searchlist.wxml

    └─ searchlist.wxss

├─ shopcar 购物车-页面

    ├─ shopcar.js

    ├─ shopcar.json

    ├─ shopcar.wxml

    ├─ shopcar.wxs

    └─ shopcar.wxss

└─ telform 手机绑定-页面

       ├─ telform.js
       
       ├─ telform.json
       
       ├─ telform.wxml
       
       └─ telform.wxss
       
       
util

       ├─ auth.js   Sorage获取token tel 
       1.判断本地存储是否有手机号信息 如果有 直接加入 
       
       2.没有手机号 判断是否有token信息   授权信息 如果有 引导跳转到手机号绑定
       
       3.没有授权信息 我们先引导用户到授权页面
   
       └─ request.js  封装Ajax Promise接收参数 展开参数 放在这和后面的内容进行拼接
       
