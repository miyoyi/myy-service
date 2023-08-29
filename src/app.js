const express = require('express')       //引入express框架
const router=require('./router')         //引入路由
const fs = require('fs')                 //引入用于文件操作的组件
const https = require('https')           //引入用于搭建https服务的组件
const bodyParser = require('body-parser')//引入用于解析request请求包的中间件
const cors=require('cors')               //引入用于解决跨域问题的中间件

const app=express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',router)

const privateKey = fs.readFileSync('https/miyoyi.key', 'utf8') // 获取你的秘钥文件
const certificate = fs.readFileSync('https/miyoyi.pem', 'utf8') // 你的证书文件
const credentials = { key: privateKey, cert: certificate }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 3000

httpsServer.listen(SSLPORT, function() {
  console.log('\n'+'    --https服务器已启动'+': https://localhost:%s'+'\n\n', SSLPORT)
})
