const UPLOAD_PATH ='' // 文件上传地址服务器配置或本地文件
const SOURCE_PATH ='https://localhost:3000'

module.exports = {
  CODE_ERROR: -1,              //错误状态码
  CODE_SUCCESS: 0,             //成功状态码
  CODE_TOKEN_EXPIRED: -2 ,     //token已过期
  debug: false,                //debug模式开关
  PWD_SALT: 'miyoyi',      //MD5加密密钥
  PRIVATE_KEY: 'miyoyi',   //JWT密钥
  JWT_EXPIRED: 60*60*2,        //token失效时间
  UPLOAD_PATH,                 //照片上传路径
  SOURCE_PATH                  //资源服务器地址      
}