import { http } from "../utils/http";

/**
 * 登录
 * @param {*} data
 * @returns
 */
export function login(data) {
  return http({
    url: "/sys/login",
    method: "POST",
    data,
  });
}

/**
 * 获取登录人员信息
 * @returns
 */
export function getUserInfo() {
  return http({
    url: "/sys/user/info",
  });
}
