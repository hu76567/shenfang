/**
 * 获取
 * @returns
 */
let getUser = () => {
  return uni.getStorageSync("user") || "";
};

/**
 * 设置
 * @param {*} val
 */
let setUser = (val) => {
  uni.setStorageSync("user", val);
};

/**
 * 删除
 */
let removeUser = () => {
  uni.removeStorageSync("user");
};

// 导出
export { getUser, setUser, removeUser };
