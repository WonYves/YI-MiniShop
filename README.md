# MiniShop弋购 基于微信小程序构建的手机商城项目 利用json-server实现的零编码伪后端接口

## 模拟json-server的目的就是在小程序开发中没有后端接口，或者是怕找的一些后端接口将来过期了之后，引入成本最低的方式就是json-server  就算前端开发中没有后端 也能模拟出一个后端来顺利开发 

## 项目结构

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
       
       
## 以下为项目展示

![`37O6C@409}SM@{{{(%{CIY](https://user-images.githubusercontent.com/113281531/193313044-4d7b5b63-07f0-4674-9ce1-f284b6fcce26.png)

![~$DC~7}$(@6I7(RBBQH5U@Y](https://user-images.githubusercontent.com/113281531/193313051-6bb288ce-dc1f-4507-b685-07d5a72f7df9.png)

![5EA02W4QX6{1JG`R_Q8 5PG](https://user-images.githubusercontent.com/113281531/193313057-9f3bfd8a-f0ac-43cc-973e-dab2399c6ea6.png)

![CW(O99N5GF75AKI} )_02QB](https://user-images.githubusercontent.com/113281531/193313059-a76d5f1f-9d0c-4ce6-8fb4-1564250d6fd8.png)

![F8UWEGG07SF{S(@}5LE8{4E](https://user-images.githubusercontent.com/113281531/193313060-36feb78c-6394-4dfa-a66f-9e48e7f87cf6.png)

![H5S~ N0`O(J7H`1OUHNTZU4](https://user-images.githubusercontent.com/113281531/193313064-fcd78e4e-ca23-44ee-8835-6d6e00dc2b74.png)

![NR R5B`PLU@UQV{MM(V195E](https://user-images.githubusercontent.com/113281531/193313068-0ce58409-6a54-49be-bf71-c0363dbcd954.png)

![U9V8GN0FV1{IZR@R}V$U))7](https://user-images.githubusercontent.com/113281531/193313070-a2f1fd25-e231-4e8b-9373-5c82408af449.png)

