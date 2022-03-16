/** 用法相关 */
import { http } from "../utils/http";

/**
 * 添加用法
 * @param {
 * instructions  用法
 * } data
 * @returns
 */
export function addUsage(data) {
  return http({
    url: "/app/usage/save",
    method: "post",
    data,
  });
}

/**
 * 修改用法
 * @param {
 * instructions  用法
 * id  用法id
 * } data
 * @returns
 */
export function updateUsage(data) {
  return http({
    url: "/app/usage/update",
    method: "post",
    data,
  });
}
