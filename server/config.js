// 配置文件

module.exports = {

  // 上传图片到腾讯云COS配置文件
  cosconfg: {
    SecretId: 'AKIDeV4WntOYluysa7SNp6FDiIm6FD1kFpDQ', // 用户的 SecretId
    SecretKey: 'EVbcTDVddR4bXLxRlwwvgMsEONE6tVxG', // 用户的 SecretKey
    Bucket: 'qcloudtest-1257065328', // 替换为用户操作的 Bucket
    Region: 'ap-guangzhou' // 替换为用户操作的 Region
  },

  // 上传图片到七牛云配置文件
  qiniuconfig: {
    accessKey: 'j_nheGLPm4J5uHXS7dX8-Qjlx7aZKVPlEi8ltL3y', // 你的七牛的accessKey
    secretKey: 'gqenYhU3okWkdo93IoS3iFPpumTWxJslkWf7e_3v', // 你的七牛的secretKey
    Bucket: 'static', // 你的七牛存储对象
    zone: 'qiniu.zone.Zone_z0', // 空间对应的机房
    origin: 'qiniu.xl686.com' // 使用测试域名
  },

  // MySQL 数据库配置文件
  config: {
    host: '118.126.64.188', // 数据库的地址
    user: 'Blog', // 用户名
    password: 'Blog', // 密码
    database: 'Blog' // 数据库的名字
  },

  //
  smsconfig: {
    appid: '1400116906', // 短信应用SDK AppID    1400开头
    appkey: '7b974313ce369997915faad1c2e29024', // 短信应用SDK AppKey
    templateId: '182964', // 短信模板ID，需要在短信应用中申请
    smsSign: 'BorderCollie' // 签名  这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`
  },
  wechat: {
    AppSecret: 'd3ea7b3c445d8ab9dcccf28cca5468df',
    AppID: 'wx6a92bdc58a9eddf3'
  },
  TOKEN_KEY: 'hades19960512',
  GAODE_KEY: 'e5e77918efad8f49e124c3433561c0b7' // 高德地图

}
