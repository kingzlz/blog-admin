const ipUrl = 'http://127.0.0.1:7001/admin/';
const servicePath = {
  checkLogin: ipUrl + 'checkOpenId', //  检查用户名密码是否正确
  getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
};
export default servicePath;
