/**
 * 获取token
 * @returns
 */
let getToken = () => {
  return uni.getStorageSync("token") || '';
};

/**
 * 设置token
 * @param {*} val
 */
let setToken = (val) => {
  uni.setStorageSync("token", val);
};

/**
 * 删除token
 */
let removeToken = () => {
  uni.removeStorageSync("token");
};

/**
 * 判断当前登录状态
 * @returns
 */
let isAuth = () => {
  return !!getToken(); // !!值  转换成对应 true 或false
};

// 导出
export { getToken, setToken, removeToken, isAuth };
